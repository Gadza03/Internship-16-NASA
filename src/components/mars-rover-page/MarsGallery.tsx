import { MarsPhoto } from "../../types/MarsPhoto";
import c from "../../styles/mars.module.css";
import { useNavigate } from "react-router";
import { paths } from "../../paths";
type MarsGalleryProps = {
  data: MarsPhoto[];
};

export default function MarsGallery({ data }: MarsGalleryProps) {
  const navigate = useNavigate();
  return (
    <div className={c.marsGalleryWrapper}>
      {data.map((photo: MarsPhoto) => (
        <div
          key={photo.id}
          className={c.marsPhoto}
          onClick={() =>
            navigate(paths.singleMarsPhoto(photo.id), {
              state: photo,
            })
          }
        >
          <img src={photo.img_src} alt={photo.rover.name} />
        </div>
      ))}
    </div>
  );
}
