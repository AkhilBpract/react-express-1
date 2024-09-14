import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import useGetTask from "../hook/get-task";
import parseDate from "src/utils/parse-date";

const ViewDetails = ({ open, handleClose, id }) => {
  const task = useGetTask(id);
  const { title, description, createdAt } = task || {};
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>Task Details</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography sx={{ fontWeight: 600 }} variant="subtitle2">
            Title : {title}
          </Typography>
          <Typography
            sx={{ fontWeight: 600 }}
            color="text.secondary"
            variant="caption"
          >
            Description : {description}
          </Typography>
          <Typography color="text.secondary" variant="caption">
            Created At : {parseDate(createdAt)}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewDetails;
