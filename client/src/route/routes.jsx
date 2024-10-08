import React, { lazy, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import LoadingComponent from "./loading-component";

const ErrorPage = LoadingComponent(lazy(() => import("./error-page.jsx")));
const Login = LoadingComponent(lazy(() => import("../auth/login/index.tsx")));
const Quantity = LoadingComponent(
  lazy(() => import("../create-quantity/index.jsx"))
);
const Register = LoadingComponent(
  lazy(() => import("../auth/register/index.tsx"))
);
const Preview = LoadingComponent(lazy(() => import("../preview/index.jsx")));

const Routes = () => {
  const router = useRoutes([
    { path: "/", element: <Navigate to="auth" /> },
    {
      path: "auth",
      children: [
        { index: true, element: <Navigate to="register" /> },
        { path: "login", element: <Login title="test" /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "preview",
      element: <Preview />,
    },
    {
      path: "quantity",
      element: <Quantity />,
    },
    {
      path: "my-html-page", // Add this route for your HTML page
      element: <LoadExternalHTML />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return router;
};
const LoadExternalHTML = () => {
  useEffect(() => {
    window.location.href = "/prefix/index.html"; // Redirects to your HTML file
  }, []);

  return null; // You can return null since this component just redirects
};

export default Routes;
