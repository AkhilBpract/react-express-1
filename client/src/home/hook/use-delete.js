import { useSnackbar } from "notistack";
import React from "react";
import axiosInstance from "src/components/axios";

const useDelete = (reload) => {
  const { enqueueSnackbar } = useSnackbar();

  const deleteTask = async (id) => {
    try {
      const { status, data } = await axiosInstance.delete(`api/task/${id}`);
      if (status === 200) {
        enqueueSnackbar(data.message, { variant: "success" });
        reload();
      }
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };
  return deleteTask;
};

export default useDelete;
