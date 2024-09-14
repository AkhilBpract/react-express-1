import React, { useState, useCallback } from "react";
import axiosInstance from "src/components/axios";

const useHandleTask = () => {
  const [tasks, setTasks] = useState({
    to_do: [],
    in_progress: [],
    done: [],
  });

  const fetchAllTask = useCallback(async () => {
    try {
      const { status, data } = await axiosInstance.get("api/task");
      if (status === 200) {
        const taskList = data.reduce(
          (acc, task) => {
            if (acc[task.status]) {
              acc[task.status].push(task);
            }
            return acc;
          },
          { to_do: [], in_progress: [], done: [] }
        );
        setTasks(taskList);
      }
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  }, []);

  const onDragEnd = async (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const reorderedTasks = reorder(
        tasks[source.droppableId],
        source.index,
        destination.index
      );
      setTasks((prevTasks) => ({
        ...prevTasks,
        [source.droppableId]: reorderedTasks,
      }));
    } else {
      const taskToMove = tasks[source.droppableId][source.index];
      const sourceTasks = Array.from(tasks[source.droppableId]);
      sourceTasks.splice(source.index, 1); // Remove task from source
      const destinationTasks = Array.from(tasks[destination.droppableId]);
      destinationTasks.splice(destination.index, 0, {
        ...taskToMove,
        status: destination.droppableId,
      });

      setTasks((prevTasks) => ({
        ...prevTasks,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destinationTasks,
      }));

      try {
        await axiosInstance.put(`/api/task/${taskToMove._id}`, {
          status: destination.droppableId,
        });
      } catch (error) {
        console.error("Failed to update task status", error);
      }
    }
  };

  return { fetchAllTask, tasks, onDragEnd };
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default useHandleTask;
