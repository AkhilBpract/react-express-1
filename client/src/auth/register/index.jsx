import { LoadingButton } from "@mui/lab";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Box, Stack, useMediaQuery } from "@mui/system";

import ReactFormProvider from "src/components/react-form-provider";
import useRegister from "./hook/use-register";
import FormTextField from "src/components/form-text-field";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import axiosInstance from "src/components/axios";
const Index = () => {
  const { methods, onSubmit } = useRegister();
  const {
    formState: { isSubmitting },
  } = methods;
  const matches = useMediaQuery("(min-width:600px)");
  const handleGoogleSuccess = async (response) => {
    if (response.error) {
      console.error("Google Sign-In Error:", response.error);
      return;
    }
    const { tokenId } = response;
    try {
      const res = await axiosInstance.post("api/google-login", {
        idToken: tokenId,
      });

      const { token } = res.data;
      localStorage.setItem("token", token); // Save the token or handle it as needed
      console.log("Login successful:", res.data.message);
    } catch (error) {
      console.error("Error sending token to backend:", error);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: matches ? 480 : "100%",
          margin: "auto",
          display: "flex",
          minHeight: "60vh",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography color="blue" sx={{ fontWeight: 700 }} variant="h6">
            Signup
          </Typography>
          <Card
            sx={{
              p: 3,
              width: matches ? 500 : "100%",
              boxShadow: 2,
              border: "2px solid #3377f5",
              borderRadius: 2,
              mt: 2,
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
                  sx={{
                    textTransform: "none",
                  }}
                >
                  Signup
                </LoadingButton>
                <Stack
                  direction="row"
                  sx={{ justifyContent: "center", alignItems: "center" }}
                  spacing={1}
                >
                  <Typography variant="subtitle2">
                    Already have an account?
                  </Typography>
                  <Link to="/auth/login" style={{ color: "blue" }}>
                    Login
                  </Link>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={handleGoogleSuccess}
                    onFailure={(response) =>
                      console.error("Google Sign-In Error:", response.error)
                    }
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <LoadingButton
                        variant="contained"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        sx={{
                          textTransform: "none",
                          width: 200,
                        }}
                      >
                        Login with{" "}
                        <span style={{ fontWeight: 900, marginLeft: "3px" }}>
                          Google
                        </span>
                      </LoadingButton>
                    )}
                  />
                </Box>
              </Stack>
            </ReactFormProvider>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Index;
