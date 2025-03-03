const API_KEY = import.meta.env.VITE_API_KEY;

export const API_URLS = {
  apod: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRover: `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`,
  neo: `https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}`,
  earthImagery: `https://api.nasa.gov/planetary/earth/assets?api_key=${API_KEY}`,
};
