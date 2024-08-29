import React from "react";
import Routes from "./route/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useRoutes from "./route/routes";

const App = () => {
  const router = useRoutes();

  return <RouterProvider router={router} />;
};

export default App;
