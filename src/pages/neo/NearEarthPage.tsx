import { useState } from "react";
import NeoList from "../../components/neo-page/NeoList";
import { withLoading } from "../../hoc/WithLoading";
import { fetchNeo } from "../../services/neoService";
import c from "../../styles/neo.module.css";

const START_DATE = "2015-09-07";

export function NearEarthPage() {
  const [date, setNewDate] = useState<string>(START_DATE);

  const NearEarthPageWithLoad = withLoading(NeoList, () =>
    fetchNeo({ start_date: date })
  );

  const handleNewDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value);
  };

  return (
    <div className="container header">
      <h2>Near Earth Objects on day - {date}</h2>

      <label className={c.label}>
        Change date:
        <input type="date" value={date} onChange={handleNewDate} />
      </label>

      <NearEarthPageWithLoad />
    </div>
  );
}
