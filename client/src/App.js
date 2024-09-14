import React, { useEffect } from "react";
import Routes from "./route/routes";
import { BrowserRouter } from "react-router-dom";
import useGetProfile from "./home/hook/use-get-profile";

const App = () => {
  const fetchProfile = useGetProfile();
  const isLogin = localStorage.getItem("isLogin") === "true";
  useEffect(() => {
    if (isLogin) {
      fetchProfile();
    }
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
