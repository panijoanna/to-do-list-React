import { takeEvery, call, put, select, delay, Effect } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleError,
  fetchExampleSuccess,
  fetchExampleTasks,
  selectTasks,
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { Tasks } from "../../types";

function* fetchExampleTasksHandler(): Generator<Effect, void, Tasks[]> {
  try {
    const exampleTasks: Tasks[] = yield call(getExampleTasks);
    yield delay(500);
    yield put(fetchExampleSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleError());
    yield call(alert, "Coś poszło nie tak");
  }
}

function* saveTasksInLocalStorageHandler(): Generator<Effect, void, Tasks[]> {
  const tasks: Tasks[] = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
