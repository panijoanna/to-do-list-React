import { takeEvery, call, put, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleError,
  fetchExampleSuccess,
  fetchExampleTasks,
  selectTasks,
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield delay(500);
    yield put(fetchExampleSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleError());
    yield call(alert, "Coś poszło nie tak");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
