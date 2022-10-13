import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TaskCardButtons from "./TaskCardButtons";
import EditDialog from "./EditDialog";
export default function TaskCard({ task, editDialog, setEditDialog }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
