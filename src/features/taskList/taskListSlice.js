import { createSlice } from "@reduxjs/toolkit";
export const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    value: ["ben", "harry"],
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.value = [...state.value, payload];
    },
  },
});
const { actions, reducer } = taskListSlice;
export const { save } = taskListSlice.actions;
export default taskListSlice.reducer;
