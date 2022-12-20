import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDoneTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        hideTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        },
    },
});

export const { addTask, hideTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;