import { chatApi } from "../../api/chatApi";

const SET_MESSAGES = "SET-MESSAGES";
const SET_STATUS = "SET-STATUS";

let initialState = {
  messages: [],
  status: "pengind" | "ready",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-MESSAGES": {
      return {
        ...state,
        messages: [...state.messages, ...action.messages],
      };
    }
    case "CHANGE-STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;

let _newMessagesHandler = null;

const newMessagesHandlerCreator = (dispatch) => {
  if (_newMessagesHandler === null) {
    _newMessagesHandler = (messages) => {
      dispatch(messagesSet(messages));
    };
  } else {
    _newMessagesHandler = null;
  }
  return _newMessagesHandler;
};

export const startMessagesListening = () => async (dispatch) => {
  chatApi.start();
  chatApi.subscribeNewMessages(newMessagesHandlerCreator(dispatch));
};

export const stopMessagesListening = () => async (dispatch) => {
  chatApi.subscribeNewMessages(newMessagesHandlerCreator(dispatch))();
  chatApi.stop();
};

export const sendMessage = async (message) => {
  chatApi.sendMessage(message);
};

export const messagesSet = (messages) => {
  console.log(messages);
  return { type: SET_MESSAGES, messages: messages };
};

export const changeStatus = (status) => {
  return { type: SET_STATUS, status: status };
};
