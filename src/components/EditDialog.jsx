import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

<<<<<<< HEAD
export default function EditDialog({
  task,
  editDialog,
  setEditDialog,
  setEditText,
}) {
  // const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    setEditDialog(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditText(e.target[0].value);
    setEditDialog(false);
  };
=======
export default function EditDialog({ editDialog, setEditDialog }) {
>>>>>>> parent of da62334 (Baffled)
  return (
    <div>
      <Dialog open={editDialog}>
        <form>
          <DialogTitle>Filter tasks by name</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
<<<<<<< HEAD
              // id={task.id}
=======
              id="name"
>>>>>>> parent of da62334 (Baffled)
              label="Filter tasks"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button
            //   onClick={() => {
            //     handleCancel();
            //   }}
            >
              Cancel
            </Button>
            <Button type="submit">Filter tasks</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
