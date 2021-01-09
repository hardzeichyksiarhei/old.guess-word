import React, { lazy } from "react";

import Default from "../layouts/Default";

import Welcome from "../pages/Welcome";

const Categories = lazy(() => import("../pages/Categories"));
const Settings = lazy(() => import("../pages/Settings"));

const routes = () => [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
];

export default routes;
