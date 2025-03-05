import axios from "axios";

export const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const params = {
  api_key: API_KEY,
  start_date: Date,
  end_date: Date,
};
const fetchData = async () => {};
