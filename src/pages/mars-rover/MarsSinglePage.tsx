import { useLocation } from "react-router";
import { MarsPhoto } from "../../types/MarsPhoto";

export function MarsSinglePage() {
  const location = useLocation();
  const photo = location.state as MarsPhoto;

  return (
    <div>
      <img src={photo.img_src} alt="" />
      <p>{photo.rover.name}</p>
    </div>
  );
}
