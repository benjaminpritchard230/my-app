import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TaskCardButtons from "./TaskCardButtons";
import EditDialog from "./EditDialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { save, done, remove, edit } from "../features/taskList/taskListSlice";
export default function TaskCard({ task, editDialog, setEditDialog }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState("");

  // useEffect(() => {
  //   if (editText.length > 0) {
  //     console.log(editText);
  //     // dispatch(done(task.id));
  //     console.log(task.id);
  //   }
  // }, [editText]);

  const handleSubmit = () => {
    dispatch(edit(task.id));
    setEditDialog(false);
  };

  const handleCancelClick = () => {
    setEditDialog(false);
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Item sx={{ m: 0.5 }}>
        <Card sx={{ minWidth: 275, minHeight: 150 }}>
          <CardContent>
            <Typography variant={"h5"}>{task.name}</Typography>
            <Typography variant={"h5"}>{task.id}</Typography>
          </CardContent>
          <TaskCardButtons
            task={task}
            editDialog={editDialog}
            setEditDialog={setEditDialog}
          />
          |
          <Button
            onClick={() => {
              console.log(task);
              console.log(task.id);
              dispatch(edit(task.id));
            }}
          >
            click
          </Button>
          <CardActions></CardActions>
        </Card>
      </Item>
    </Grid>
  );
}
