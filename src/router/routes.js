import React, { lazy } from "react";

import Default from "../layouts/Default";

import Welcome from "../pages/Welcome";

const Categories = lazy(() => import("../pages/Categories"));
const Settings = lazy(() => import("../pages/Settings"));
const Rules = lazy(() => import("../pages/Rules"));

const GameStart = lazy(() => import("../pages/game/Start"));
const GameChoose = lazy(() => import("../pages/game/Choose"));
const GameRound = lazy(() => import("../pages/game/Round"));
const GameOver = lazy(() => import("../pages/game/Over"));

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
      {
        path: "/rules",
        element: <Rules />,
      },
      {
        path: "/game-start",
        element: <GameStart />,
      },
      {
        path: "/game-choose",
        element: <GameChoose />,
      },
      {
        path: "/game-round",
        element: <GameRound />,
      },
      {
        path: "/game-over",
        element: <GameOver />,
      },
    ],
  },
];

export default routes;
