import { useState, useEffect } from "react";
import { LatLngExpression } from "leaflet";
import { fetchEarthImages } from "../../services/earthService";
import MapComponent from "../../components/earth-images/Map";
import { withLoading } from "../../hoc/WithLoading";
import EarthImage from "../../components/earth-images/EarthImage";
import { IoMdCloseCircleOutline } from "react-icons/io";
import c from "../../styles/earth.module.css";
import { Toaster, toast } from "react-hot-toast";
import { FaLocationCrosshairs } from "react-icons/fa6";

const getEarthImageData = (location: LatLngExpression | null) => {
  if (location) {
    const lat = Array.isArray(location) ? location[0] : location.lat;
    const lon = Array.isArray(location) ? location[1] : location.lng;
    return fetchEarthImages(lat, lon);
  }
  return Promise.resolve(null);
};

export function EarthImagery() {
  const [location, setLocation] = useState<LatLngExpression | null>(null);
  const [favorites, setFavorites] = useState<LatLngExpression[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteLocations");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const saveFavorite = () => {
    if (
      location &&
      !favorites.some((fav) => JSON.stringify(fav) === JSON.stringify(location))
    ) {
      const updatedFavorites = [...favorites, location];
      setFavorites(updatedFavorites);
      localStorage.setItem(
        "favoriteLocations",
        JSON.stringify(updatedFavorites)
      );
      toast.success("Successfuly added location.");
    } else {
      toast.error("Location is already in favourites.");
    }
  };

  const removeFavorite = (favToRemove: LatLngExpression) => {
    const updatedFavorites = favorites.filter(
      (fav) => JSON.stringify(fav) !== JSON.stringify(favToRemove)
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteLocations", JSON.stringify(updatedFavorites));
    toast.success("Successfuly removed location.");
  };

  const EarthImageWithLoading = withLoading(EarthImage, () =>
    getEarthImageData(location)
  );

  return (
    <div className="container header">
      <div className={c.earthImgWrapper}>
        <h2>Earth Imagery Viewer</h2>
        <p className={c.textIcon}>
          <FaLocationCrosshairs className={c.icon} /> Find your favourite
          location on map and get photo from satellite on the bottom of the page
        </p>
        <MapComponent position={location} setPosition={setLocation} />

        <button
          className={c.addFavouriteBtn}
          onClick={saveFavorite}
          disabled={!location}
        >
          Save location to favourite
        </button>
        <h3>Favourite locations:</h3>
        <ul className={c.favourites}>
          {favorites.length > 0 ? (
            favorites.map((fav, index) => (
              <li key={index} className={c.favouriteItem}>
                <button
                  className={c.favouriteLocationBtn}
                  onClick={() => setLocation(fav)}
                >
                  {Array.isArray(fav) ? fav.join(", ") : ""}
                </button>
                <IoMdCloseCircleOutline
                  className={c.removeIcon}
                  onClick={() => removeFavorite(fav)}
                />
              </li>
            ))
          ) : (
            <p className={c.noItemsText}>No items in list</p>
          )}
        </ul>
        {location && <EarthImageWithLoading />}
      </div>
      <Toaster />
    </div>
  );
}
