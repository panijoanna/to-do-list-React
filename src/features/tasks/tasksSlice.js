import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
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
  },
});

export const { addTask, hideTasks, toggleTaskDone, toggleAllTaskDone, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
