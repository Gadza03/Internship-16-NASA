import { useLocation, useRoutes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { paths } from "./paths";

import NeoVisualisation from "./components/neo-page/NeoVisualisation";
import {
  ApodPage,
  ApodSinglePage,
  EarthImagery,
  HomePage,
  MarsRoverPage,
  MarsSinglePage,
  NearEarthPage,
  Page404,
} from "./pages";
import { useEffect } from "react";

export default function Router() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
