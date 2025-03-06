import { Dispatch, SetStateAction } from "react";
import c from "../../styles/apod.module.css";

type DateFilterProps = {
  setStartDate: Dispatch<SetStateAction<string | null>>;
  setEndDate: Dispatch<SetStateAction<string | null>>;
  currentStartDate: string | null;
  currentEndDate: string | null;
  handleClearFilters: () => void;
};

export const DateFilter = ({
  setStartDate,
  setEndDate,
  currentStartDate,
  currentEndDate,
  handleClearFilters,
}: DateFilterProps) => {
  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    date: "startDate" | "endDate"
  ) => {
    const value = e.target.value;
    if (date === "startDate") {
      setStartDate(value || null);
    } else {
      setEndDate(value || null);
    }
  };

  const handleClearFilter = () => {
    setStartDate(null);
    setEndDate(null);
    handleClearFilters();
  };

  return (
    <div className={c.dateFiltersWrapper}>
      From:
      <input
        type="date"
        value={currentStartDate || ""}
        onChange={(e) => handleDateChange(e, "startDate")}
      />
      to:
      <input
        type="date"
        value={currentEndDate || ""}
        onChange={(e) => handleDateChange(e, "endDate")}
      />
      <button onClick={handleClearFilter}>Clear Filters</button>
    </div>
  );
};
