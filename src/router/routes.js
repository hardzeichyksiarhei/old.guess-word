import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/home"));
const Categories = lazy(() => import("../pages/Categories"));

const Setup = lazy(() => import("../pages/setup"));

const routes = () => [
  {
    path: "/",
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/categories",
    element: (
      <Suspense fallback={null}>
        <Categories />
      </Suspense>
    ),
  },
  {
    path: "/setup",
    element: (
      <Suspense fallback={null}>
        <Setup />
      </Suspense>
    ),
  },
];

export default routes;
