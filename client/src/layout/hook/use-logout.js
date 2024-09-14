import React from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogin");
    navigate("/auth/login");
  };
  return logout;
};

export default useLogout;
