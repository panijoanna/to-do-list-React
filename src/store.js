import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
