import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";
import {RootState} from './store'
import { ThunkAction } from "redux-thunk"
import { AnyAction } from 'redux'

type InitialStateType = {
  users: Array<any>,
  pageSize: number,
  totalUsers: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgressUsers: Array<any>
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgressUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      state.users.forEach((user) => {
        if (user.id === action.payload) {
          user.followed = true
        }
      })
    },
    unfollow: (state, action: PayloadAction<number>) => {
      state.users.forEach((user) => {
        if (user.id === action.payload) {
          user.followed = false
        }
      })
    },
    setUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setTotalUsers: (state, action: PayloadAction<number>) => {
      state.totalUsers = action.payload
    },
    toggleIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload
    },
    toggleFollowingProcess: (state, action: PayloadAction<any>) => {
     if (action.payload.isFetching)  {state.followingInProgressUsers.push(action.payload.userId)} else {
      state.followingInProgressUsers = state.followingInProgressUsers.filter(
        (userId) => userId !== action.payload.userId
      )
     }
    }
  }
})

export default usersSlice.reducer

export const {follow, unfollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching, toggleFollowingProcess} = usersSlice.actions

export const thunkGetUsers = (currentPage:any, pageSize:any): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch:any) => {
    dispatch(toggleIsFetching(true));
    let data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
  };
};

export const thunkFollowUser = (userId: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcess({isFetching: true, userId}));
    let data = await usersApi.followUser(userId);
    if (data.resultCode === 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowingProcess({isFetching: false, userId}));
  };
};

export const thunkUnfollowUser = (userId: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcess({isFetching: true, userId}));
    let data = await usersApi.unfollowUser(userId);
    if (data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowingProcess({isFetching: false, userId}));
  };
};
