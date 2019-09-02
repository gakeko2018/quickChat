import { put, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { db } from "../config/firebase.config";

export function* getChatMessages(data) {
  try {
    const result = yield axios.get(
      "https://jsonblob.com/api/jsonBlob/4f421a10-5c4d-11e9-8840-0b16defc864d"
    );
    yield put({
      type: ActionTypes.GET_MESSAGES_SUCCESS,
      payload: { messageList: result && result.data }
    });
  } catch (error) {
    yield put({ type: ActionTypes.GET_MESSAGES_FAILED, error });
  }
}
export function* logMessages(data) {
  try {
    db.ref().push({
      data
    });

    yield put({
      type: ActionTypes.FIREBASE_LOG_MESSAGE_SUCCESS
    });
  } catch (error) {
    yield put({ type: ActionTypes.FIREBASE_LOG_MESSAGE_FAILED, error });
  }
}

export function* watchActions() {
  yield takeLatest(ActionTypes.GET_MESSAGES, getChatMessages);
  yield takeLatest(ActionTypes.FIREBASE_LOG_MESSAGE, logMessages);
}
