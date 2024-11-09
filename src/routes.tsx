import React from "react";
import { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import NotFound from "./pages/NotFound";
const ComicsList = React.lazy(() => import("./pages/ComicsList"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ComicsList />
          </Suspense>
        ),
      },
      {
        path: "comic/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <h2>Detalles del comic</h2>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
