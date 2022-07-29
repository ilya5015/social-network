const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_MESSAGE_TEXT = "ADD-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Ilya" },
    { id: 1, name: "Alexey" },
    { id: 1, name: "Sergey" },
    { id: 1, name: "Artem" },
    { id: 1, name: "Dmitriy" },
    { id: 1, name: "Vladimir" },
  ],
  messagesData: [
    { id: 1, message: "hi" },
    { id: 1, message: "how are you" },
    { id: 1, message: "nice to meet you" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessageText = state.newMessageText;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 1, message: newMessageText },
        ],
        newMessageText: "",
      };
    }
    case ADD_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.messageText };
    }
    default:
      return state;
  }
};

export default dialogsReducer;

export const addMessage = () => {
  return { type: ADD_MESSAGE };
};

export const addMessageText = (messageText) => {
  return { type: ADD_MESSAGE_TEXT, messageText: messageText };
};
