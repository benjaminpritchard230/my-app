import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import FloatingActionButtons from "./components/FloatingActionButtons";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TaskCard from "./components/TaskCard";
import TaskDialog from "./components/TaskDialog";
import { TaskListDisplay } from "./features/taskList/taskListDisplay";
import TopAppBar from "./components/TopAppBar";
import { save } from "./features/taskList/taskListSlice";
import { styled } from "@mui/material/styles";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("light");
  const [taskDialog, setTaskDialog] = useState(false);

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#0057b7",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const displayTaskCards = () => {
    let cardsArray = [];
    taskList.forEach((task, index) => {
      cardsArray.push(
        <Grid xs={12} md={6} lg={4}>
          <Item>
            <TaskCard task={task} />
          </Item>
        </Grid>
      );
    });
    return cardsArray;
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minWidth: 1 }} key="1">
        <Grid container spacing={0}>
          <Grid xs={12}>
            <TopAppBar theme={theme} setTheme={setTheme} />
          </Grid>
          {displayTaskCards()}
        </Grid>
      </Box>
      <FloatingActionButtons
        taskDialog={taskDialog}
        setTaskDialog={setTaskDialog}
      />
      <TaskDialog taskDialog={taskDialog} setTaskDialog={setTaskDialog} />
    </ThemeProvider>
  );
}

export default App;
