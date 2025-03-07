export type MarsPhoto = {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
  };
};
