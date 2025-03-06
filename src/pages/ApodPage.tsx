import { ApodList } from "../components/apod-page/ApodList";
import { withLoading } from "../hoc/WithLoading";
import { fetchApod } from "../services/apodService";
import { getDateRange } from "../utils/getDateRange";

const { today, startDate } = getDateRange();
const ApodWithLoad = withLoading(ApodList, () => fetchApod(startDate, today));

export function ApodPage() {
  return <ApodWithLoad />;
}
