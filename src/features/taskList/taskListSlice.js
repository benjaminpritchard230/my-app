import { createSlice } from "@reduxjs/toolkit";
export const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    value: [
      {
        name: "ben",
        id: "123",
        done: true,
      },
      {
        name: "harry",
        id: "456",
        done: false,
      },
    ],
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.value = [...state.value, payload];
    },
    done: (state, param) => {
      const { payload } = param;
<<<<<<< HEAD
      const index = state.value.findIndex((task) => task.id === payload);
      const newArray = [...state.value];
      newArray[index].done = !newArray[index].done;
      state.value = newArray;
    },
    edit: (state, param) => {
      const { payload } = param;
      const index = state.value.findIndex((task) => task.id === payload);
      const newArray = [...state.value];
      newArray[index].name = "harry";
=======
      const index = state.value.findIndex((task) => task.id === payload); //finding index of the item
      const newArray = [...state.value]; //making a new array
      newArray[index].done = !newArray[index].done; //changing value in the new array
>>>>>>> parent of da62334 (Baffled)
      state.value = newArray;
    },
    remove: (state, param) => {
      const { payload } = param;
      const index = state.value.findIndex((task) => task.id === payload); //finding index of the item
      let newArray = [...state.value]; //making a new array
      // newArray.splice(index, index); //changing value in the new array
      newArray.splice(index, 1);
      state.value = newArray;
      // console.log(newArray[index].name);
    },
    clear: (state) => {
      state.value = [];
    },
    doneDelete: (state, param) => {
      const { payload } = param;
      // const index = state.value.findIndex((task) => task.id === payload); //finding index of the item
      // let newArray = [...state.value]; //making a new array
      // // newArray.splice(index, index); //changing value in the new array
      // newArray.splice(index, 1);
      state.value = payload;
      // console.log(newArray[index].name);
    },
    update: (state, param) => {
      const { payload } = param;
      state.value = payload;
    },
  },
});
const { actions, reducer } = taskListSlice;
export const { save, clear, done, remove, doneDelete, update } =
  taskListSlice.actions;
export default taskListSlice.reducer;
