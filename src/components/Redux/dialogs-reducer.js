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
      let newMessage = {
        id: 1,
        message: state.newMessageText,
      };

      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case ADD_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.messageText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default dialogsReducer;

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const addMessageTextActionCreator = (messageText) => {
  return { type: ADD_MESSAGE_TEXT, messageText: messageText };
};
