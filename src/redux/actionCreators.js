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

export const sendMessage = (message) => ({
  type: ActionTypes.SEND_MESSAGE,
  payload: message
});

export const sendMessageSuccess = messageList => ({
  type: ActionTypes.SEND_MESSAGE_SUCCESS,
  payload: messageList
});

export const sendMessageFailed = error => ({
  type: ActionTypes.SEND_MESSAGE_FAILED,
  payload: error
});
