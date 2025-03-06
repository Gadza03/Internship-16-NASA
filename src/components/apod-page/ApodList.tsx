import { ApodType } from "../../types/apodType";
import c from "../../styles/apod.module.css";

type ApodListProps = {
  data: ApodType[];
};

export function ApodList({ data }: ApodListProps) {
  console.log(data);
  return (
    <div className={`container header`}>
      <div className={c.apodWrapper}>
        {data.map((apod) => (
          <p key={apod.title}>{apod.title}</p>
        ))}
        <p>bar sam usa</p>
      </div>
    </div>
  );
}
