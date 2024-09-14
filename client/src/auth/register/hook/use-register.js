import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosInstance from "src/components/axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import useGetProfile from "src/home/hook/use-get-profile";

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
  const fetchProfile = useGetProfile();

  const navigate = useNavigate();
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (inputData) => {
    try {
      const { status, data } = await axiosInstance.post(
        "api/register",
        inputData
      );
      if (status === 201) {
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("isLogin", true);
        fetchProfile();
        enqueueSnackbar(data.message, { variant: "success" });
        navigate("/user");
      }
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
      if (Boolean(err.error?.errors)) {
        Object.entries(err.error.errors).forEach(([k, v]) => {
          methods.setError(k, { message: v.message });
        });
      }
    }
  };
  return { methods, onSubmit };
};

export default useRegister;
