import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Error from "src/image/404Image.jpg";
const ErrorPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        minHeight: "60vh",
        marginTop: "100px",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2}>
        <img src={Error} style={{ width: 400, height: 400 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button component={Link} to="/auth/login" variant="outlined">
            Go Back Home
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
