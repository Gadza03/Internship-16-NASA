import axios from "axios";
import { MarsPhoto } from "../types/MarsPhoto";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

export const fetchMarsPhotos = async (
  date: string | null,
  page: number,
  rover: string,
  camera?: string
) => {
  try {
    const params: any = {
      earth_date: date,
      page: page,
      api_key: API_KEY,
    };

    if (camera) {
      params.camera = camera;
    }

    const response = await axios.get(`${BASE_URL}/${rover}/photos`, {
      params,
    });

    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }

    const { photos } = response.data;

    return photos.map((item: MarsPhoto) => ({
      id: item.id,
      sol: item.sol,
      camera: {
        id: item.camera.id,
        name: item.camera.name,
      },
      img_src: item.img_src,
      earth_date: item.earth_date,
      rover: {
        id: item.rover.id,
        name: item.rover.name,
        landing_date: item.rover.landing_date,
        launch_date: item.rover.launch_date,
      },
    }));
  } catch (error) {
    console.error("Error fetching Mars photos:", error);
    throw new Error("Failed to fetch Mars Rover photos");
  }
};

export const getMarsPhotoInfoById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: id,
    });

    return response.data as MarsPhoto;
  } catch (error) {
    throw new Error("Failed to get Mars Rover photo by ID");
  }
};
