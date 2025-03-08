import c from "../../styles/earth.module.css";

type EarthImageProps = {
  data: { url: string };
};

export default function EarthImage({ data }: EarthImageProps) {
  return (
    <img src={data.url} alt="satellite photo" className={c.satelliteImg} />
  );
}
