import { all, fork } from "redux-saga/effects";
import { watchActions } from "../redux/sagas";

export default function* rootSaga() {
  yield all([fork(watchActions)]);
}
