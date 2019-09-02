import { put, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "./actionTypes";
import axios from "axios";

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

export function* watchActions() {
  yield takeLatest(ActionTypes.GET_MESSAGES, getChatMessages);
}
