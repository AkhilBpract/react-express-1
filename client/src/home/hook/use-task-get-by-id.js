import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
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
const useTaskGetById = (id) => {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const fetchData = async () => {
    try {
      const { data, status } = await axiosInstance.get(`api/task/${id}`);
      if (status === 200) {
        const { title, description } = data;
        methods.reset({ title, description });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);
  return { methods };
};

export default useTaskGetById;
