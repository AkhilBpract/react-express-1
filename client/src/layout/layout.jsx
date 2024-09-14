import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import useLogout from "./hook/use-logout";

const Layout = () => {
  const isLogin = localStorage.getItem("isLogin") === "true";
  console.log(isLogin);
  const logout = useLogout();
  return (
    <>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#3377f5",
          height: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon
          icon="ri:file-list-fill"
          style={{ color: "white", width: 30, height: 30 }}
        />
        <Box sx={{ display: "flex" }}>
          {isLogin ? (
            <Button
              sx={{
                backgroundColor: "green",
                textTransform: "none",
              }}
              variant="contained"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "#3377f5",
                  textTransform: "none",
                }}
                variant="contained"
                size="small"
                component={Link}
                to="/auth/login"
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/auth/register"
                size="small"
                sx={{ color: "white", textTransform: "none" }}
              >
                Signup
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
