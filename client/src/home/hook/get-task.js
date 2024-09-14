import React, { useEffect, useState } from "react";
import axiosInstance from "src/components/axios";

const useGetTask = (id) => {
  const [task, setTask] = useState({});
  const fetchData = async () => {
    try {
      const { data, status } = await axiosInstance.get(`api/task/${id}`);
      if (status === 200) {
        setTask(data);
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
  return task;
};

export default useGetTask;
