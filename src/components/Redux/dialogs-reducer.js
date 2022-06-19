const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 1,
        message: action.messageText,
      };

      state.messagesData.push(newMessage);
      break;
    default:
      return state;
  }

  return state;
};

export default dialogsReducer;

export const addMessageActionCreator = (messageText) => {
  return { type: ADD_MESSAGE, messageText: messageText };
};
