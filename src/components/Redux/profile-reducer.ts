import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../../api/api";
import { PayloadAction } from "@reduxjs/toolkit";
import {RootState} from './store'
import { ThunkAction } from "redux-thunk"
import { AnyAction } from 'redux'

type InitialStateType = {
  postData: any,
  profile: any,
  userStatus: string
}

let initialState: InitialStateType = {
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

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload
    },
    setUserStatus: (state, action: PayloadAction<string>) => {
      state.userStatus = action.payload
    }
  }
})

export const {setUserProfile, setUserStatus} = profileSlice.actions

export default profileSlice.reducer;

export const thunkGetUser = (userId: any): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    let data = await profileApi.getUser(userId);
    dispatch(setUserProfile(data));
  };
};

export const thunkGetUserStatus = (userId: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    profileApi.getUserStatus(userId).then((data) => {
      dispatch(setUserStatus(data));
    });
  };
};

export const thunkUpdateUserStatus = (userStatus: string):ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    profileApi.setStatus(userStatus).then((data) => {
      console.log(data);
      dispatch(setUserStatus(userStatus));
    });
  };
};
