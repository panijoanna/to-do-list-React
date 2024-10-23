import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import { Tasks, TasksState } from "../../types";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDoneTasks: false,
    loading: false,
  } as TasksState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Tasks>) => {
      state.tasks.push(payload);
    },
    hideTasks: (state) => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    toggleTaskDone: (state, { payload }: PayloadAction<number | string>) => {
      const index = state.tasks.findIndex(({ id }) => id === payload);
      if (index !== -1) {
        state.tasks[index].done = !state.tasks[index].done;
      }
    },
    removeTask: (state, { payload }: PayloadAction<number | string>) => {
      const index = state.tasks.findIndex(({ id }) => id === payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    toggleAllTaskDone: (state) => {
      for (const task of state.tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleSuccess: (state, { payload }: PayloadAction<Tasks[]>) => {
      state.tasks = payload;
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
} = tasksSlice.actions;

const selectTasksState = (state: { tasks: TasksState }) => state.tasks;

export const selectTasks = (state: { tasks: TasksState }) =>
  selectTasksState(state).tasks;
export const selectHideDoneTasks = (state: { tasks: TasksState }) =>
  selectTasksState(state).hideDoneTasks;
export const selectEmptyTasks = (state: { tasks: TasksState }) =>
  selectTasks(state).length === 0;
export const selectEveryDoneTasks = (state: { tasks: TasksState }) =>
  selectTasks(state).every(({ done }: Tasks) => done);

export const getTaskById = (
  state: { tasks: TasksState },
  taskId: number | string
) => selectTasks(state).find(({ id }: Tasks) => id === taskId);
export const selectTaskByQuery = (
  state: { tasks: TasksState },
  query: string | null
) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }: Tasks) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export const load = (state: { tasks: TasksState }) =>
  selectTasksState(state).loading;

export default tasksSlice.reducer;
