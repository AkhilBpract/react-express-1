import React from "react";
import axiosInstance from "src/components/axios";

const useDelete = (reload) => {
  const deleteTask = async (id) => {
    try {
      const { status, data } = await axiosInstance.delete(`api/task/${id}`);
      if (status === 200) {
        reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return deleteTask;
};

export default useDelete;
