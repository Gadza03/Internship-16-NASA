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
  MarsSinglePage,
} from "./pages";
import NeoVisualisation from "./components/neo-page/NeoVisualisation";

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
          path: `${paths.apod}/:date`,
          element: <ApodSinglePage />,
        },
        {
          path: paths.marsRover,
          element: <MarsRoverPage />,
        },
        {
          path: `${paths.marsRover}/:id`,
          element: <MarsSinglePage />,
        },
        {
          path: paths.neo,
          element: <NearEarthPage />,
        },
        {
          path: `${paths.neo}/:id`,
          element: <NeoVisualisation />,
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
