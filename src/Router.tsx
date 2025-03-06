import { useRoutes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { paths } from "./paths";
import {
  ApodPage,
  EarthImagery,
  MarsRoverPage,
  NearEarthPage,
  Page404,
  HomePage,
  ApodSinglePage,
} from "./pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: paths.apod,
          element: <ApodPage />,
        },
        {
          path: "astronomy-picture-of-the-day/:date",
          element: <ApodSinglePage />,
        },
        {
          path: paths.marsRover,
          element: <MarsRoverPage />,
        },
        {
          path: paths.neo,
          element: <NearEarthPage />,
        },
        {
          path: paths.earthImagery,
          element: <EarthImagery />,
        },
        { path: "*", element: <Page404 /> },
      ],
    },
  ]);
}
