import { useState } from "react";
import { getAllApod } from "../services/api/api";
import { Apod } from "../types/apod";

export function ApodPage() {
  const [data, setData] = useState<Apod | null>(null);

  const fetchApod = async () => {
    const fetchedData = await getAllApod();
    setData(fetchedData);

    fetchApod();
  };

  console.log(data);
  return (
    <>
      <p>Apod</p>
    </>
  );
}
