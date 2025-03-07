import { withLoading } from "../../hoc/WithLoading";
import MarsGallery from "../../components/mars-rover-page/MarsGallery";
import { fetchMarsPhotos } from "../../services/marsService";
import { useState } from "react";
import MarsFilters from "../../components/mars-rover-page/MarsFilters";
import c from "../../styles/mars.module.css";

const RADNOM_DATE = "2019-02-06";

export function MarsRoverPage() {
  const [rover, setRover] = useState<string>("curiosity");
  const [page, setPage] = useState<number>(1);
  const [earthDate, setEarthDate] = useState<string>(RADNOM_DATE);
  const [camera, setCamera] = useState<string>("");

  const MarsRoverPageWithLoad = withLoading(MarsGallery, () =>
    fetchMarsPhotos(earthDate, page, rover, camera)
  );

  return (
    <div className="container header">
      <div className={c.marsHeader}>
        <h1>Mars Gallery</h1>
        <h3>Explore the latest photos captured by NASA's Mars rovers</h3>
        <p>
          Take a closer look at Mars through the eyes of the rovers. These
          captivating images offer a rare glimpse into the harsh and mysterious
          terrain of the Red Planet. Each photo tells a story of exploration and
          discovery, bringing us one step closer to understanding the Martian
          world and its secrets.
        </p>
      </div>
      <MarsFilters
        rover={rover}
        page={page}
        earthDate={earthDate}
        camera={camera}
        setRover={setRover}
        setPage={setPage}
        setEarthDate={setEarthDate}
        setCamera={setCamera}
      />
      <MarsRoverPageWithLoad />
    </div>
  );
}
