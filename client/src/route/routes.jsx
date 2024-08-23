import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingComponent from "./loading-component";
const Login = LoadingComponent(lazy(() => import("../auth/login/index.tsx")));

const useRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <>error</>,
      element: <Login title="test" />,
    },
  ]);
  return router;
};

export default useRoutes;
