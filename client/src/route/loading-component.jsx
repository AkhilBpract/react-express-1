import { LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";

const LoadingComponent = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default LoadingComponent;
