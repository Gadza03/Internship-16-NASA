import axios from "axios";
import { ApodType } from "../types/apodType";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export const fetchApod = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        start_date: startDate,
        end_date: endDate,
      },
    });
    const data = await response.data;
    return data
      .map((item: ApodType) => ({
        date: item.date,
        explanation: item.explanation,
        url: item.url,
        title: item.title,
      }))
      .reverse();
  } catch (error) {
    throw new Error("Failed to fetch APOD data");
  }
};
