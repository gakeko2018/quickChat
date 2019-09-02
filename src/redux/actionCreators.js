import * as ActionTypes from "./actionTypes";

export const setUsername = name => ({
  type: ActionTypes.SET_USERNAME,
  payload: name
});

export const getMessages = () => ({
  type: ActionTypes.GET_MESSAGES,
  payload: null
});

export const getMessagesSuccess = messageList => ({
  type: ActionTypes.GET_MESSAGES_SUCCESS,
  payload: messageList
});

export const getMessagesFailed = error => ({
  type: ActionTypes.GET_MESSAGES_FAILED,
  payload: error
});

export const sendMessage = message => ({
  type: ActionTypes.SEND_MESSAGE,
  payload: message
});

export const logMessage = message => ({
  type: ActionTypes.FIREBASE_LOG_MESSAGE,
  payload: message
});

export const logMessageSuccess = message => ({
  type: ActionTypes.FIREBASE_LOG_MESSAGE_SUCCESS,
  payload: message
});

export const logMessageFailed = error => ({
  type: ActionTypes.FIREBASE_LOG_MESSAGE_FAILED,
  payload: error
});
