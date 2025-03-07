export const paths = {
  home: "/",
  apod: "astronomy-picture-of-the-day",
  singleApod: (date: string) => `/astronomy-picture-of-the-day/${date}`,
  marsRover: "mars-rover-photos",
  singleMarsPhoto: (id: number) => `/mars-rover-photos/${id}`,
  neo: "near-earth-objects",
  neoVisualisation: (id: string) => `/near-earth-objects/${id}`,
  earthImagery: "earth-imagery",
};
