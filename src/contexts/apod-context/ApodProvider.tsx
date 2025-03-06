import React, { useState, useEffect, useContext } from "react";
import { format, subDays } from "date-fns";
import { fetchApod } from "../../services/apodService";
import { ApodContext } from "./ApodContext";
import { ApodType } from "../../types/apodType";
import { useErrorHandler } from "../../hooks/useErrorHandler";

export const ApodProvider = ({ children }: { children: React.ReactNode }) => {
  const { handleError } = useErrorHandler();
  const [apodData, setApodData] = useState<ApodType[]>([]);
  const [lastFetchedDate, setLastFetchedDate] = useState<string | null>(null);

  const loadMore = async () => {
    if (!lastFetchedDate) return;

    const newEndDate = format(
      subDays(new Date(lastFetchedDate), 1),
      "yyyy-MM-dd"
    );
    const newStartDate = format(
      subDays(new Date(newEndDate), 19),
      "yyyy-MM-dd"
    );

    try {
      const newData = await fetchApod(newStartDate, newEndDate);
      setApodData((prev) => [...prev, ...newData.reverse()]);
      setLastFetchedDate(newStartDate);
    } catch (err) {
      handleError(err instanceof Error ? err : new Error(String(err)));
    }
  };

  useEffect(() => {
    const initialStartDate = format(subDays(new Date(), 19), "yyyy-MM-dd");
    const initialEndDate = format(new Date(), "yyyy-MM-dd");

    fetchApod(initialStartDate, initialEndDate)
      .then((data) => {
        setApodData(data.reverse());
        setLastFetchedDate(initialStartDate);
      })
      .catch((err) =>
        handleError(err instanceof Error ? err : new Error(String(err)))
      );
  }, []);

  return (
    <ApodContext.Provider
      value={{
        apodData,
        loadMore,
      }}
    >
      {children}
    </ApodContext.Provider>
  );
};

export const useApod = () => {
  const context = useContext(ApodContext);
  if (!context) {
    throw new Error("useApod must be used within an ApodProvider");
  }
  return context;
};
