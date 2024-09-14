import React, { useEffect, useState } from "react";
import axiosInstance from "src/components/axios";

const useHandleTask = () => {
  const [tasks, setTasks] = useState({
    to_do: [],
    in_progress: [],
    done: [],
  });
  const fetchAllTask = async () => {
    try {
      const { status, data } = await axiosInstance("api/task");
      if (status === 200) {
        const taskList = data.reduce(
          (acc, task) => {
            acc[task.status].push(task);
            return acc;
          },
          { to_do: [], in_progress: [], done: [] }
        );
        setTasks(taskList);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllTask();
  }, []);
  return { fetchAllTask, tasks };
};

export default useHandleTask;
