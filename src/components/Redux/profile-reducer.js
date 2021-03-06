import { profileApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const ADD_POST_MESSAGE = "ADD-POST-MESSAGE";
const SET_USER_PROFILE = "SET-USER-PROFILE";

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
  profile: null,
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
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPost = () => {
  return { type: ADD_POST };
};

export const addPostMessage = (postMessage) => {
  return { type: ADD_POST_MESSAGE, postMessage };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const getUser = (userId) => {
  return (dispatch) => {
    profileApi.getUser(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
