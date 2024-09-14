import React, { lazy, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LoadingComponent from "./loading-component";
import Layout from "src/layout/layout";

const ErrorPage = LoadingComponent(lazy(() => import("./error-page.jsx")));
const Login = LoadingComponent(lazy(() => import("../auth/login/index.jsx")));

const Register = LoadingComponent(
  lazy(() => import("../auth/register/index.jsx"))
);
const Home = LoadingComponent(lazy(() => import("src/home/index.jsx")));
const Routes = () => {
  const router = useRoutes([
    { path: "/", element: <Navigate to="auth" /> },
    {
      path: "auth",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="register" /> },
        { path: "login", element: <Login title="test" /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "user",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="home" /> },
        { path: "home", element: <Home /> },
      ],
    },

    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return router;
};

export default Routes;
