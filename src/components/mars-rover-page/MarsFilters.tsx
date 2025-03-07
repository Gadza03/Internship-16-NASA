import c from "../../styles/mars.module.css";

type MarsFilterProps = {
  rover: string;
  page: number;
  earthDate: string;
  camera: string;
  setRover: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setEarthDate: React.Dispatch<React.SetStateAction<string>>;
  setCamera: React.Dispatch<React.SetStateAction<string>>;
};

const ROVERS = ["curiosity", "opportunity", "spirit"];
const CAMERAS = [
  "FHAZ",
  "RHAZ",
  "MAST",
  "CHEMCAM",
  "MAHLI",
  "MARDI",
  "NAVCAM",
  "PANCAM",
  "MINITES",
];

export default function MarsFilters({
  rover,
  page,
  earthDate,
  camera,
  setRover,
  setPage,
  setEarthDate,
  setCamera,
}: MarsFilterProps) {
  const handleRoverChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRover(e.target.value);
  };

  const handleEarthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEarthDate(e.target.value);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleBackPage = () => {
    if (page <= 1) {
      return;
    }
    setPage((prevPage) => prevPage - 1);
  };

  const handleCameraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setCamera("");
    } else {
      setCamera(e.target.value);
    }
  };

  return (
    <div className={c.filterBox}>
      <h2>Filters</h2>
      <label>
        Rover:
        <select value={rover} onChange={handleRoverChange}>
          {ROVERS.map((rover) => (
            <option key={rover} value={rover}>
              {rover}
            </option>
          ))}
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={earthDate} onChange={handleEarthDateChange} />
      </label>
      <label>
        Camera:
        <select value={camera} onChange={handleCameraChange}>
          <option value="all">All Cameras</option>

          {CAMERAS.map((camera: string) => (
            <option key={camera} value={camera}>
              {camera}
            </option>
          ))}
        </select>
      </label>
      <div className={c.loadData}>
        <p>More photos:</p>
        <button onClick={handleNextPage}>Next Page</button>
        <button onClick={handleBackPage}>Back Page</button>
      </div>
    </div>
  );
}
