import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosInstance from "src/components/axios";

const schema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("First name is required"),
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
  const methods = useForm({ defaultValues });
  const onSubmit = async (inputData) => {
    // const formData = new FormData();
    // Object.entries(inputData).forEach(([k, v]) => formData.append(k, v));
    try {
      const res = await axiosInstance.post("api/users", inputData,{});
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return { methods, onSubmit };
};

export default useRegister;
