import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import useCreateTask from "../hook/use-create-task";
import FormTextField from "src/components/form-text-field";
import ReactFormProvider from "src/components/react-form-provider";
import { Stack } from "@mui/system";
import useUpdateTask from "../hook/use-update-task";

const Form = ({ handleClose, title }) => {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Stack sx={{ p: 2 }} spacing={2}>
          <FormTextField name="title" label="Title" />
          <FormTextField
            name="description"
            label="Description"
            multiline
            rows={4}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" type="submit" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </>
  );
};
export const CreateTask = ({ open, handleClose, fetchAllTask }) => {
  const { methods, onSubmit } = useCreateTask(() => {
    handleClose();
    fetchAllTask();
  });
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <ReactFormProvider methods={methods} onSubmit={onSubmit}>
        <Form handleClose={handleClose} title="Create Task" />
      </ReactFormProvider>{" "}
    </Dialog>
  );
};

export const EditTask = ({ open, handleClose, fetchAllTask, id }) => {
  const { methods, onSubmit } = useUpdateTask(id, () => {
    handleClose();
    fetchAllTask();
  });
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <ReactFormProvider methods={methods} onSubmit={onSubmit}>
        <Form handleClose={handleClose} title="Create Task" />
      </ReactFormProvider>{" "}
    </Dialog>
  );
};
