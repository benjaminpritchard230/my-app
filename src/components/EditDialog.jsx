import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { save, done, remove, edit } from "../features/taskList/taskListSlice";

export default function EditDialog({ task, editDialog, setEditDialog }) {
  // const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    setEditDialog(false);
  };
  const handleSubmit = () => {
    // e.preventDefault();
    console.log(task.name);
    console.log(task.id);

    dispatch(done(task.id));
    setEditDialog(false);
  };
  return (
    <div>
      <Dialog open={editDialog}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Edit task name</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id={task.id}
              label="Filter tasks"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCancelClick();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Edit name</Button>
            <Button
              onClick={() => {
                dispatch(done(task.id));
              }}
            >
              try this
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
