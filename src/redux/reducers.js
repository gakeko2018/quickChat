import * as ActionTypes from "./actionTypes";

const initialAuthState = {
  username: ""
};

const initialChatState = {
  messageList: []
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };

    default:
      return state;
  }
};

export const chatReducer = (state = initialChatState, action) => {
  const newList = state.messageList;

  switch (action.type) {
    case ActionTypes.GET_MESSAGES:
      return {
        ...state,
        isLoading: true,
        errMess: null
      };

    case ActionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        messageList: action.payload.messageList
      };

    case ActionTypes.GET_MESSAGES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.SEND_MESSAGE:
      newList.push(action.payload);
      return {
        ...state,
        errMess: null,
        messageList: newList
      };

    default:
      return state;
  }
};
