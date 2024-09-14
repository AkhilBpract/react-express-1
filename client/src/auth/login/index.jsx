import { LoadingButton } from "@mui/lab";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import FormTextField from "src/components/form-text-field";
import ReactFormProvider from "src/components/react-form-provider";
import useLogin from "./hook/login";

const Login = () => {
  const { methods, onSubmit } = useLogin();
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
          minHeight: "60vh",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography color="blue" variant="h6">
            Login
          </Typography>
          <Card
            sx={{
              p: 3,
              width: 500,
            }}
          >
            <ReactFormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2}>
                <FormTextField name="email" label="Email" variant="outlined" />
                <FormTextField
                  name="password"
                  label="Password"
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
    </>
  );
};

export default Login;
