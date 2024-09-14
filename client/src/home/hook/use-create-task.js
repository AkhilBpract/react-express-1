import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "src/components/axios";
import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});
const defaultValues = {
  title: "",
  description: "",
};
const useCreateTask = (reload) => {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const onSubmit = async (inputData) => {
    try {
      const { status, data } = await axiosInstance.post("api/task", inputData);
      console.log(status, data);
      if (status === 201) {
        reload();
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

export default useCreateTask;
