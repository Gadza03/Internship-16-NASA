import { ApodType } from "../../types/apodType";
import c from "../../styles/apod.module.css";
import { useNavigate } from "react-router";
import { paths } from "../../paths";
type ApodCardProps = {
  apod: ApodType;
};

export function ApodCard({ apod }: ApodCardProps) {
  const navigate = useNavigate();
  const handleNavigateApod = (date: string) => {
    navigate(paths.singleApod(date));
  };
  return (
    <div className={c.apodCard} onClick={() => handleNavigateApod(apod.date)}>
      <div className={c.apodInfo}>
        <p className={c.date}>Date: {apod.date}</p>
        <h2>{apod.title}</h2>
      </div>
      <div className={c.apodImage}>
        <img src={apod.url} alt={apod.title} />
      </div>
    </div>
  );
}
