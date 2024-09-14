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

const Form = ({ handleClose, title }) => {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
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
export const CreateTask = ({ open, handleClose }) => {
  const { methods, onSubmit } = useCreateTask(() => handleClose());
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <ReactFormProvider methods={methods} onSubmit={onSubmit}>
        <Form handleClose={handleClose} title="Create Task" />
      </ReactFormProvider>{" "}
    </Dialog>
  );
};
