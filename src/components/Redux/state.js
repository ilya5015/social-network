import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        {
          id: 1,
          message: "Hi there, how are you ?",
          likeCounter: "40",
          dislikeCounter: "20",
        },
        {
          id: 2,
          message: "It`s my first post",
          likeCounter: "30",
          dislikeCounter: "10",
        },
      ],
    },

    messagesPage: {
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
    },
  },

  getState() {
    return this._state;
  },

  callSubscriber() {
    console.log("State is changed");
  },

  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this.callSubscriber(store);
  },
};

export default store;
