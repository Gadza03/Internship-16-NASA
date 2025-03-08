import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const NASA_API = "https://api.nasa.gov/planetary/earth/assets";

export const fetchEarthImages = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(NASA_API, {
      params: {
        lon,
        lat,
        dim: 0.4,
        api_key: API_KEY,
      },
    });

    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }

    return { url: response.data.url };
  } catch (error) {
    throw new Error("Failed to fetch Earth images");
  }
};
