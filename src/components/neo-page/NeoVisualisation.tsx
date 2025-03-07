import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { NeoType } from "../../types/NeoType";
import { useLocation } from "react-router";
import c from "../../styles/neo.module.css";
import GoBackButton from "../GoBackButton";

export default function NeoVisualisation() {
  const location = useLocation();
  const neo: NeoType = location.state;
  const approach = neo.close_approach_data[0];
  const distance = parseFloat(approach.miss_distance.kilometers);

  const data = [
    { name: "Earth", distance: 0 },
    { name: neo.name, distance: distance },
  ];

  return (
    <div className="container header">
      <GoBackButton />
      <h2>Distance from asteroid {neo.name} to Earth</h2>

      <div className={c.chartWrapper}>
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
            <XAxis type="category" dataKey="name" />
            <YAxis
              type="number"
              dataKey="distance"
              unit=" km"
              tickMargin={10}
              dx={-5}
            />
            <Tooltip />
            <Scatter data={data} fill="red" shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>
        <p>
          <strong>Distance:</strong> {distance.toLocaleString()} km
        </p>
      </div>
    </div>
  );
}
