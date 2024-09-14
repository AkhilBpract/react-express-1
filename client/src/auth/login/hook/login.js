import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosInstance from "src/components/axios";
import { useNavigate } from "react-router-dom";
import useGetProfile from "src/home/hook/use-get-profile";

const useLogin = () => {
  const fetchProfile = useGetProfile();
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("First name is required"),
  });
  const defaultValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const onSubmit = async (inputData) => {
    try {
      const { status, data } = await axiosInstance.post("api/login", inputData);
      if (status === 200) {
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("isLogin", true);
        fetchProfile();
        navigate("/user");
      }
    } catch (err) {
      if (Boolean(err.error?.errors)) {
        Object.entries(err.error.errors).forEach(([k, v]) => {
          methods.setError(k, { message: v.message });
        });
      }
    }
  };
  return { methods, onSubmit };
};

export default useLogin;
