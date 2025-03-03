import { API_URLS } from "./apiConfig";

export async function getAllApod() {
  try {
    const response = await fetch(API_URLS.apod);
    if (!response.ok) {
      throw new Error("Something went wrong while fetching...");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
