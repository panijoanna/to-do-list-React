import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDoneTasks: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    hideTasks: (state) => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    toggleTaskDone: ({ tasks }, { payload: idTask }) => {
      const index = tasks.findIndex(({ id }) => id === idTask);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: idTask }) => {
      const index = tasks.findIndex(({ id }) => id === idTask);
      tasks.splice(index, 1);
    },
    toggleAllTaskDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  hideTasks,
  toggleTaskDone,
  toggleAllTaskDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDoneTasks = (state) =>
  selectTasksState(state).hideDoneTasks;
export const selectEmptyTasks = (state) => selectTasks(state).length === 0;
export const selectEveryDoneTasks = (state) =>
  selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;
