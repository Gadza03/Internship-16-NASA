import c from "../../styles/apod.module.css";
import { ApodCard } from "./ApodCard";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import { useEffect, useRef, useState, useCallback } from "react";
import { DateFilter } from "./DateFilter";
import { subDays } from "date-fns";
import { formatDateToString } from "../../utils/formatDateToString";
import { fetchApod } from "../../services/apodService";
import { ApodType } from "../../types/apodType";

type ApodListProps = {
  data: ApodType[];
};

export function ApodList({ data }: ApodListProps) {
  const { error } = useErrorHandler();

  const [apods, setApods] = useState<ApodType[]>(data);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [moreData, setMoreData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const loader = useRef<HTMLDivElement | null>(null);

  const isDateFilterActive = startDate !== null && endDate !== null;

  useEffect(() => {
    if (isDateFilterActive) {
      const filteredApods = data.filter(
        (apod) => apod.date >= startDate && apod.date <= endDate
      );
      setApods(filteredApods);
    } else {
      setApods(data);
    }
  }, [startDate, endDate, data]);

  const handleClearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setApods(data);
  };

  const loadMoreApods = useCallback(async () => {
    if (!moreData || isLoading || initialLoad) return;

    setIsLoading(true);
    const lastDate =
      apods.length > 0
        ? subDays(new Date(apods[apods.length - 1].date), 1)
        : new Date();
    const newStartDate = formatDateToString(subDays(lastDate, 19));
    const newEndDate = formatDateToString(lastDate);

    try {
      const newApods = await fetchApod(newStartDate, newEndDate);
      if (newApods.length === 0) setMoreData(false);
      setApods((prev) => [...prev, ...newApods]);
    } catch (error) {
      console.error("Error fetching more APODs:", error);
    } finally {
      setIsLoading(false);
    }
  }, [apods, moreData, isLoading, initialLoad]);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreApods();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loadMoreApods]);

  if (error) throw error;

  return (
    <div className={`container header`}>
      <h1 className={c.apodHeading}>Astronomy Pictures Of The Day</h1>
      <DateFilter
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        handleClearFilters={handleClearFilters}
        currentStartDate={startDate}
        currentEndDate={endDate}
      />
      <div className={c.apodsWrapper}>
        {apods.map((apod) => (
          <ApodCard key={apod.date} apod={apod} />
        ))}
      </div>
      {!isDateFilterActive && moreData && !initialLoad && (
        <div ref={loader} className={c.infiniteLoader}>
          Loading more data ...
        </div>
      )}
    </div>
  );
}
