import { NeoType } from "../../types/NeoType";
import NeoCard from "./NeoCard";
import c from "../../styles/neo.module.css";

type NeoListProps = {
  data: NeoType[];
};

export default function NeoList({ data }: NeoListProps) {
  return (
    <>
      <div className={c.neoCardsWrapper}>
        {data.map((item: NeoType) => (
          <NeoCard key={item.id} neo={item} />
        ))}
      </div>
    </>
  );
}
