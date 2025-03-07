import axios from "axios";
import { NeoType } from "../types/NeoType";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.nasa.gov/neo/rest/v1/feed";

type fetchNeoProps = {
  start_date: string;
  end_date?: string;
};

export const fetchNeo = async ({ start_date, end_date }: fetchNeoProps) => {
  try {
    const params: any = {
      start_date: start_date,
      api_key: API_KEY,
    };

    if (end_date) {
      params.end_date = end_date;
    }
    const response = await axios.get(`${BASE_URL}`, {
      params: params,
    });

    if (!response.data.near_earth_objects[start_date]) {
      return [];
    }

    return response.data.near_earth_objects[start_date].map(
      (item: NeoType) => ({
        id: item.id,
        name: item.name,
        absolute_magnitude_h: item.absolute_magnitude_h,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min:
              item.estimated_diameter.kilometers.estimated_diameter_min,
            estimated_diameter_max:
              item.estimated_diameter.kilometers.estimated_diameter_max,
          },
        },
        is_potentially_hazardous_asteroid:
          item.is_potentially_hazardous_asteroid,
        close_approach_data: [
          {
            close_approach_date:
              item.close_approach_data[0].close_approach_date,
            relative_velocity: {
              kilometers_per_hour:
                item.close_approach_data[0].relative_velocity
                  .kilometers_per_hour,
            },
            miss_distance: {
              kilometers: item.close_approach_data[0].miss_distance.kilometers,
            },

            orbiting_body: item.close_approach_data[0].orbiting_body,
          },
        ],
        is_sentry_object: item.is_sentry_object,
      })
    );
  } catch (error) {
    throw new Error("Failed to fetch Near Earth Objects");
  }
};
