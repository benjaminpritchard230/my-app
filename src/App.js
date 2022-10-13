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
import FilterDialog from "./components/FilterDialog";
import EditDialog from "./components/EditDialog";

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
  const [filterText, setFilterText] = useState("");
  const [filterDialog, setFilterDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);

  const [filteredTaskList, setFilteredTaskList] = useState([]);

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

  const displayFilteredTaskCards = () => {
    let cardsArray = [];
    filteredTaskList.forEach((task, index) => {
      cardsArray.push(
        <TaskCard
          task={task}
          key={index}
          editDialog={editDialog}
          setEditDialog={setEditDialog}
        />
      );
    });
    return cardsArray;
  };

  useEffect(() => {
    console.log(filterText, "filter text");
  }, [filterText]);

  useEffect(() => {
    const filtered = taskList.filter((task) => {
      return task.name.toLowerCase().includes(filterText.toLowerCase());
    });
    // console.log(filtered);
    setFilteredTaskList(filtered);
  }, [filterText, taskList]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minWidth: 1 }} key="1">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TopAppBar theme={theme} setTheme={setTheme} />
          </Grid>
          {displayFilteredTaskCards()}
        </Grid>
      </Box>
      <FloatingActionButtons
        taskDialog={taskDialog}
        setTaskDialog={setTaskDialog}
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <TaskDialog taskDialog={taskDialog} setTaskDialog={setTaskDialog} />
      <FilterDialog
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <EditDialog editDialog={editDialog} setEditDialog={setEditDialog} />
    </ThemeProvider>
  );
}

export default App;
