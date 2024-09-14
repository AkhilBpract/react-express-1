import React from "react";
import Routes from "./route/routes";
import { BrowserRouter } from "react-router-dom";
import Page from "./components/Page";
import AuthContext from "./auth/auth-provider/jwt-context";

const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
