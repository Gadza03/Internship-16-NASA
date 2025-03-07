import { MarsPhoto } from "../../types/MarsPhoto";
import c from "../../styles/mars.module.css";
type MarsGalleryProps = {
  data: MarsPhoto[];
};

export default function MarsGallery({ data }: MarsGalleryProps) {
  return (
    <div className={c.marsGalleryWrapper}>
      {data.map((photo: MarsPhoto) => (
        <div key={photo.id} className={c.marsPhoto}>
          <img src={photo.img_src} alt={photo.rover.name} />
        </div>
      ))}
    </div>
  );
}
