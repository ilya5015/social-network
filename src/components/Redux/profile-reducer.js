import { profileApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
  postData: [
    {
      id: 1,
      message: "Hi there, how are you ?",
      likeCounter: 40,
      dislikeCounter: 20,
    },
    {
      id: 2,
      message: "It`s my first post",
      likeCounter: 30,
      dislikeCounter: 10,
    },
  ],
  profile: null,
  userStatus: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 5,
            message: action.newPostText,
            likeCounter: 0,
            dislikeCounter: 0,
          },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, userStatus: action.userStatus };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setUserStatus = (userStatus) => {
  return { type: SET_USER_STATUS, userStatus };
};

export const getUser = (userId) => {
  return (dispatch) => {
    profileApi.getUser(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getUserStatus(userId).then((data) => {
      dispatch(setUserStatus(data));
    });
  };
};

export const updateUserStatus = (userStatus) => {
  return (dispatch) => {
    profileApi.setStatus(userStatus).then((data) => {
      console.log(data);
      dispatch(setUserStatus(userStatus));
    });
  };
};
