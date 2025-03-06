import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchApod } from "../services/apodService";
import { ApodType } from "../types/apodType";
import c from "../styles/apod.module.css";

export function ApodSinglePage() {
  const { date } = useParams<{ date: string }>();
  const [apod, setApod] = useState<ApodType | null>(null);

  useEffect(() => {
    if (!date) return;

    const fetchData = async () => {
      const fetchApodByDate = await fetchApod(date, date);
      if (fetchApodByDate) setApod(fetchApodByDate[0]);
    };

    fetchData();
  }, [date]);

  return (
    <div className="container header">
      <div className={c.singleInfoWrapper}>
        <div className={c.singleApodInfo}>
          <h1>{apod?.title}</h1>
          <p>{apod?.date}</p>
        </div>
        <img src={apod?.url} alt={apod?.title} />

        <h3>Explanation:</h3>
        <p>{apod?.explanation}</p>
      </div>
    </div>
  );
}
