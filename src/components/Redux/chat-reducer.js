import { chatApi } from "../../api/api";

const SET_MESSAGES = "SET-MESSAGES";

let initialState = {
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-MESSAGES": {
      return {
        ...state.messages,
        messages: action.payload,
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
  }
  return _newMessagesHandler;
};

export const startMessagesListening = () => (dispatch) => {
  chatApi.start();
  chatApi.subscribeNewMessages(newMessagesHandlerCreator(dispatch));
};

export const stopMessagesListening = () => (dispatch) => {
  chatApi.subscribeNewMessages(newMessagesHandlerCreator(dispatch))();
  chatApi.stop();
};

export const messagesSet = (messages) => {
  return { type: SET_MESSAGES, payload: messages };
};
