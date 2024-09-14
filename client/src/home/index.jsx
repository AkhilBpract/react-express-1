import React, { useState } from "react";
import useGetProfile from "./hook/use-get-profile";
import Page from "src/components/Page";
import { Box, Button, Stack } from "@mui/material";
import { CreateTask } from "./components/task-form";
import SearchCard from "./components/search-card";
import useHandleTask from "./hook/use-handle-task";

const Index = () => {
  const { fetchAllTask, tasks } = useHandleTask();
  console.log(tasks)
  const [openTask, setOpenTask] = useState(false);
  const handleClose = () => {
    setOpenTask(false);
  };
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
        </Stack>
      </Page>
      <CreateTask open={openTask} handleClose={handleClose} />
    </>
  );
};

export default Index;
