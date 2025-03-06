import { subDays } from "date-fns";
import { formatDateToString } from "./formatDateToString";

export const getDateRange = () => {
  const today = new Date();
  const date20DaysAgo = subDays(today, 19);

  const formattedToday = formatDateToString(today);
  const formatted20DaysAgo = formatDateToString(date20DaysAgo);

  return { today: formattedToday, startDate: formatted20DaysAgo };
};
