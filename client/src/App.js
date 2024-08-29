import React from "react";
import Routes from "./route/routes";
import {
  BrowserRouter,
} from "react-router-dom";
import Page from "./components/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
