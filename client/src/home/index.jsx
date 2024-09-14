import React, { useState, useEffect } from "react";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axiosInstance from "src/components/axios";
import Page from "src/components/Page";
import SearchCard from "./components/search-card";
import useHandleTask from "./hook/use-handle-task";
import { CreateTask, EditTask } from "./components/task-form";
import { capitalCase } from "change-case";
import useDelete from "./hook/use-delete";
import parseDate from "src/utils/parse-date";
import ViewDetails from "./components/view-details";

const Index = () => {
  const { fetchAllTask, tasks, onDragEnd } = useHandleTask();
  const deleteTask = useDelete(() => fetchAllTask());
  const [openTask, setOpenTask] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [openView, setOpenView] = useState(false);

  const handleClose = () => {
    setOpenTask(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedId(null);
  };
  const handleOpenEdit = (id) => {
    setOpenEdit(true);
    setSelectedId(id);
  };
  const handleCloseView = () => {
    setOpenView(false);
    setSelectedId(null);
  };
  const handleOpenView = (id) => {
    setOpenView(true);
    setSelectedId(id);
  };
  useEffect(() => {
    fetchAllTask();
  }, [fetchAllTask]);

  return (
    <>
      <Page title="Home">
        <Stack sx={{ p: 3 }} spacing={2}>
          <Box>
            <Button
              sx={{
                textTransform: "none",
                width: 200,
              }}
              onClick={() => setOpenTask(true)}
              variant="contained"
            >
              Add Task
            </Button>
          </Box>
          <SearchCard />
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid
              sx={{
                width: "100% !important",
                boxSizing: "border-box",
              }}
              container
            >
              {["to_do", "in_progress", "done"].map((status) => {
                return (
                  <Grid item xs={12} sm={4} md={4}>
                    <Droppable key={status} droppableId={status}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          style={{
                            margin: "8px",
                            border: "1px solid lightgrey",
                            borderRadius: "4px",
                            // width: "30%",
                            minHeight: "500px",
                          }}
                        >
                          <Card
                            sx={{
                              backgroundColor: "#3377f5",
                              p: 1,
                              margin: "8px",
                            }}
                          >
                            <Typography
                              sx={{ color: "white", textAlign: "center" }}
                              variant="subtitle2"
                            >
                              {/* {status.replace("_", " ")} */}
                              {capitalCase(status)}
                            </Typography>
                          </Card>
                          {tasks[status] && tasks[status].length > 0 ? (
                            tasks[status].map((task, index) => (
                              <Draggable
                                key={task._id}
                                draggableId={task._id}
                                index={index}
                              >
                                {(provided) => (
                                  <Stack
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      padding: "16px",
                                      margin: "8px",
                                      backgroundColor: "white",
                                      border: "1px solid lightgrey",
                                      borderRadius: "4px",
                                      backgroundColor: "#d6e7fe",

                                      ...provided.draggableProps.style,
                                    }}
                                    spacing={2}
                                  >
                                    <Typography
                                      sx={{ fontWeight: 600 }}
                                      variant="subtitle2"
                                    >
                                      {task.title}
                                    </Typography>
                                    <Typography
                                      color="text.secondary"
                                      variant="subtitle2"
                                    >
                                      Description : {task.description}
                                    </Typography>
                                    <Typography
                                      color="text.secondary"
                                      variant="subtitle2"
                                    >
                                      Created at : {parseDate(task.createdAt)}
                                    </Typography>
                                    <Stack
                                      sx={{
                                        justifyContent: "flex-end",
                                        textAlign: "right",
                                      }}
                                      direction="row"
                                      spacing={1}
                                    >
                                      <Button
                                        size="small"
                                        variant="contained"
                                        color="error"
                                        sx={{ textTransform: "none" }}
                                        onClick={() => deleteTask(task._id)}
                                      >
                                        Delete
                                      </Button>
                                      <Button
                                        size="small"
                                        variant="contained"
                                        sx={{
                                          textTransform: "none",
                                          backgroundColor: "#579bf9",
                                        }}
                                        onClick={() => handleOpenEdit(task._id)}
                                      >
                                        Edit
                                      </Button>
                                      <Button
                                        size="small"
                                        variant="contained"
                                        sx={{ textTransform: "none" }}
                                        onClick={() => handleOpenView(task._id)}
                                      >
                                        View Details
                                      </Button>
                                    </Stack>
                                  </Stack>
                                )}
                              </Draggable>
                            ))
                          ) : (
                            <Box
                              sx={{
                                margin: "8px",
                                display: "flex",
                                justifyContent: "center",
                                mt: 5,
                              }}
                            >
                              <Typography variant="subtitle2">
                                No Data Available
                              </Typography>
                            </Box>
                          )}
                          {provided.placeholder}
                        </Card>
                      )}
                    </Droppable>
                  </Grid>
                );
              })}
            </Grid>
          </DragDropContext>
        </Stack>
      </Page>
      <CreateTask
        open={openTask}
        handleClose={handleClose}
        fetchAllTask={fetchAllTask}
      />
      <EditTask
        open={openEdit}
        handleClose={handleCloseEdit}
        fetchAllTask={fetchAllTask}
        id={selectedId}
      />
      <ViewDetails
        open={openView}
        handleClose={handleCloseView}
        id={selectedId}
      />
    </>
  );
};

export default Index;
