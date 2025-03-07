import { NeoType } from "../../types/NeoType";
import c from "../../styles/neo.module.css";
import {
  FaMeteor,
  FaExclamationTriangle,
  FaGlobe,
  FaRuler,
  FaTachometerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router";

type NeoCardProps = {
  neo: NeoType;
};

export default function NeoCard({ neo }: NeoCardProps) {
  const navigate = useNavigate();

  const approach = neo.close_approach_data[0];
  const isHazardous = neo.is_potentially_hazardous_asteroid;

  const handleNeoClick = () => {};

  return (
    <div className={c.neoCardWrapper} onClick={handleNeoClick}>
      <div className={c.neoCardHeader}>
        <h3 className={c.textIcon}>
          {neo.name} <FaMeteor className={c.icon} />
        </h3>

        <span className={c.textIcon}>
          <strong> Is it hazdardous:</strong>
          {isHazardous ? (
            <>
              Yes <FaExclamationTriangle className={c.icon} color="red" />
            </>
          ) : (
            <>
              No
              <FaCheckCircle className={c.icon} color="green" />
            </>
          )}
        </span>

        <p>
          <strong>Absolute Magnitude:</strong> {neo.absolute_magnitude_h}
        </p>
      </div>

      <div className={c.section}>
        <p className={c.textIcon}>
          <FaRuler className={c.icon} /> <strong>Estimated Diameter:</strong>
          {neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
            3
          )}{" "}
          -{" "}
          {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}
          km
        </p>
        <p className={c.textIcon}>
          <FaTachometerAlt className={c.icon} />
          <strong>Relative Velocity:</strong>
          {parseFloat(approach.relative_velocity.kilometers_per_hour).toFixed(
            3
          )}{" "}
          km/h
        </p>
        <p className={c.textIcon}>
          <FaGlobe className={c.icon} /> <strong>Miss Distance: </strong>
          {parseFloat(approach.miss_distance.kilometers).toFixed(3)} km
        </p>

        <p className={c.textIcon}>
          <FaExclamationTriangle className={c.icon} />{" "}
          <strong>Risk in future: </strong>{" "}
          {neo.is_sentry_object ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}
