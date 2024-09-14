import React from "react";
import useTaskGetById from "./use-task-get-by-id";
import axiosInstance from "src/components/axios";

const useUpdateTask = (id, reload) => {
  const { methods } = useTaskGetById(id);
  const onSubmit = async (inputData) => {
    try {
      const { status, data } = await axiosInstance.put(
        `api/task/${id}`,
        inputData
      );
      console.log(status, data);
      if (status === 200) {
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

export default useUpdateTask;
