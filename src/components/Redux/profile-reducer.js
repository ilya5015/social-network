const ADD_POST = "ADD-POST";
const ADD_POST_MESSAGE = "ADD-POST-MESSAGE";

let initialState = {
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
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostText = state.newPostText;
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: 5, message: newPostText, likeCounter: 0, dislikeCounter: 0 },
        ],
        newPostText: "",
      };
    }
    case ADD_POST_MESSAGE: {
      return { ...state, newPostText: action.postMessage };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const addPostMessageActionCreator = (postMessage) => {
  return { type: ADD_POST_MESSAGE, postMessage: postMessage };
};
