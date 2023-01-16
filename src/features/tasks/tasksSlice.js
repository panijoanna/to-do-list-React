import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDoneTasks: false,
    loading: false,
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
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleError: (state) => {
      state.loading = false;
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
  fetchExampleSuccess,
  fetchExampleError,
  setTasks,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDoneTasks = (state) =>
  selectTasksState(state).hideDoneTasks;
export const selectEmptyTasks = (state) => selectTasks(state).length === 0;
export const selectEveryDoneTasks = (state) =>
  selectTasks(state).every(({ done }) => done);

  export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state);
  }

export const load = (state) => selectTasksState(state).loading;
export default tasksSlice.reducer;
