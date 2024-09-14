import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosInstance from "src/components/axios";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const useRegister = () => {
  const navigate = useNavigate();
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const [openSnackbar, setOpenSnackBar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const onSubmit = async (inputData) => {
    try {
      const { status, data } = await axiosInstance.post(
        "api/register",
        inputData
      );
      if (status === 201) {
        setOpenSnackBar({
          open: true,
          message: data.message,
          severity: "success",
        });
        navigate("/user");
      }
    } catch (err) {
      setOpenSnackBar({
        open: true,
        message:
          err.error?.code === 11000 ? "Email already exist" : err.message,
        severity: "error",
      });
      if (Boolean(err.error?.errors)) {
        Object.entries(err.error.errors).forEach(([k, v]) => {
          methods.setError(k, { message: v.message });
        });
      }
    }
  };
  return { methods, onSubmit, openSnackbar };
};

export default useRegister;
