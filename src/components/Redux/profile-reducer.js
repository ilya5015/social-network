const ADD_POST = "ADD-POST";

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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.postMessage,
        likeCounter: 0,
        dislikeCounter: 0,
      };

      state.postData.push(newPost);
      break;
    default:
      return state;
  }

  return state;
};

export default profileReducer;
export const addPostActionCreator = (postMessage) => {
  return { type: ADD_POST, postMessage: postMessage };
};
