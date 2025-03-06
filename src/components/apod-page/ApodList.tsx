import { ApodType } from "../../types/apodType";
import c from "../../styles/apod.module.css";
import { ApodCard } from "./ApodCard";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import { useEffect, useState } from "react";
import { DateFilter } from "./DateFilter";

type ApodListProps = {
  data: ApodType[];
};

export function ApodList({ data }: ApodListProps) {
  const { error } = useErrorHandler();
  const [apods, setApods] = useState<ApodType[]>(data);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const isDateFilterActive = startDate !== null && endDate != null;

  useEffect(() => {
    const filteredApods = () => {
      if (isDateFilterActive) {
        const filteredApods = data.filter((apod) => {
          const apodDate = apod.date;
          return apodDate >= startDate && apodDate <= endDate;
        });

        setApods(filteredApods);
      } else {
        setApods(data);
      }
    };

    filteredApods();
  }, [startDate, endDate, data]);

  const handleClearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setApods(data);
  };

  if (error) {
    throw error;
  }

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
    </div>
  );
}
