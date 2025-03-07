import { useLocation } from "react-router";
import { MarsPhoto } from "../../types/MarsPhoto";
import c from "../../styles/mars.module.css";
import GoBackButton from "../../components/GoBackButton";

export function MarsSinglePage() {
  const location = useLocation();
  const photo = location.state as MarsPhoto;

  return (
    <div className="container header">
      <GoBackButton />
      <div className={c.singleMarsPhoto}>
        <div className={c.imgWrapper}>
          <img src={photo.img_src} alt="Mars photo" />
        </div>
        <div className={c.photoDetails}>
          <h3>Details: </h3>
          <p>Rover name: {photo.rover.name}</p>
          <p>Launch Date: {photo.rover.launch_date}</p>
          <p>Landing Date: {photo.rover.landing_date}</p>

          <p>Camera: {photo.camera.name}</p>
        </div>
      </div>
    </div>
  );
}
