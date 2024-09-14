import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

const SnackBar = ({ open = false, message, severity = "info" }) => {
  const [openSnackBar, setOpenSnackBar] = useState(open);

  const handleClose = () => {
    setOpenSnackBar(false);
  };

  useEffect(() => {
    setOpenSnackBar(open);
  }, [open]);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackBar}
        autoHideDuration={1200}
        message={message}
        // key={vertical + horizontal}
        variant="success"
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
