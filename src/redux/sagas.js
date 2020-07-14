import { call, put, takeLatest } from "redux-saga/effects";
import { fetchWorkAPI } from "./api";

// worker Saga: will be fired on WORK_FETCH_REQUESTED actions
function* fetchWork(action) {
  try {
    const data = yield call(fetchWorkAPI);
    yield put({ type: "WORK_FETCH_SUCCEEDED", payload: data });
  } catch (e) {
    yield put({ type: "WORK_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("WORK_FETCH_REQUESTED", fetchWork);
}

export default mySaga;
