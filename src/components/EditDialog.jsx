import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditDialog({ editDialog, setEditDialog }) {
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
              id="name"
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
