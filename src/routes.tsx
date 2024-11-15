import React from "react";
import { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import NotFound from "./pages/NotFound";
import { ComicDetails } from "./pages/ComicDetails";
const ComicsList = React.lazy(() => import("./pages/ComicsList"));
const Checkout = React.lazy(() => import("./pages/Checkout"));

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
        path: "comics/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ComicDetails />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Checkout />
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
