import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import c from "../../styles/earth.module.css";

type ClickHandlerProps = {
  onSelectLocation: (position: LatLngExpression) => void;
};

const ClickHandler: React.FC<ClickHandlerProps> = ({ onSelectLocation }) => {
  useMapEvents({
    click(event) {
      const newPosition: LatLngExpression = [
        event.latlng.lat,
        event.latlng.lng,
      ];
      onSelectLocation(newPosition);
    },
  });

  return null;
};

type MapComponentProps = {
  position: LatLngExpression | null;
  setPosition: (position: LatLngExpression) => void;
};

export default function MapComponent({
  position,
  setPosition,
}: MapComponentProps) {
  return (
    <MapContainer center={[43.5079, 16.4544]} zoom={5} className={c.map}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ClickHandler onSelectLocation={setPosition} />
      {position && (
        <Marker position={position}>
          <Popup>
            <p>Coordinates: {position.toString()}</p>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
