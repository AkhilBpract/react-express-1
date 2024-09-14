import { LoadingButton } from "@mui/lab";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import { useState } from "react";
import SnackBar from "src/components/snack-bar";
import { useForm } from "react-hook-form";
import ReactFormProvider from "src/components/react-form-provider";
import useRegister from "./hook/use-register";
import FormTextField from "src/components/form-text-field";

const Index = () => {
  const { methods, onSubmit, openSnackbar } = useRegister();
  const {
    formState: { isSubmitting },
  } = methods;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 480,
          margin: "auto",
          display: "flex",
          minHeight: "90vh",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography color="blue" variant="h6">
            Register
          </Typography>
          <Card
            sx={{
              p: 3,
              width: 500,
            }}
          >
            <ReactFormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2}>
                <FormTextField
                  name="first_name"
                  label="First Name"
                  variant="outlined"
                />
                <FormTextField
                  name="last_name"
                  label="Last Name"
                  variant="outlined"
                />

                <FormTextField name="email" label="Email" variant="outlined" />
                <FormTextField
                  name="password"
                  label="Password"
                  variant="outlined"
                />
                <FormTextField
                  name="confirm_password"
                  label="Confirm Password"
                  variant="outlined"
                />
                <LoadingButton
                  variant="contained"
                  loading={isSubmitting}
                  type="submit"
                >
                  Register
                </LoadingButton>
              </Stack>
            </ReactFormProvider>
          </Card>
        </Box>
      </Box>
      <SnackBar
        open={openSnackbar.open}
        message={openSnackbar.message}
        severity={openSnackbar.severity}
      />
    </>
  );
};

export default Index;
