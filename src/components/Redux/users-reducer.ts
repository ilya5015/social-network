import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";

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

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({currentPage, pageSize}:any, {rejectWithValue}) => {
    const data = await usersApi.getUsers(currentPage, pageSize);
    return data
  }
)

export const followUser = createAsyncThunk(
  'users/followUser',
  async ({userId}:any, {rejectWithValue}) => {
    let data = await usersApi.followUser(userId);
    return data
  }
)

export const unfollowUser = createAsyncThunk(
  'users/unfollowUser',
  async ({userId}:any, {rejectWithValue}) => {
    let data = await usersApi.unfollowUser(userId);
    return data
  }
)

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
  },
  extraReducers:
  (builer) => {
    builer.addCase(fetchUsers.pending, (state,action) => {
      state.isFetching = true
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      console.log('fetch users', action.payload)
      state.isFetching = false
      state.users = action.payload.items
      state.totalUsers = action.payload.totalCount
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.isFetching = false
      console.log(action.payload)}
    )
    //
    .addCase(followUser.pending, (state, action) => {
      console.log('pending', action.meta.arg)
      state.followingInProgressUsers.push(action.meta.arg.userId)
    }).addCase(followUser.fulfilled, (state, action) => {
      console.log('fulfilled', action.payload)
      state.followingInProgressUsers.splice(state.followingInProgressUsers.indexOf(action.meta.arg.userId), 1)
      state.users.find(user => user.id === action.meta.arg.userId).followed = true
    }).addCase(followUser.rejected, (state, action) => {
      console.log('rejected', action.payload)
      state.followingInProgressUsers.splice(state.followingInProgressUsers.indexOf(action.meta.arg.userId), 1)
    })
    //
    .addCase(unfollowUser.pending, (state, action) => {
      console.log('pending', action.meta.arg)
      state.followingInProgressUsers.push(action.meta.arg.userId)
    }).addCase(unfollowUser.fulfilled, (state, action) => {
      console.log('fulfilled', action.payload)
      state.followingInProgressUsers.splice(state.followingInProgressUsers.indexOf(action.meta.arg.userId), 1)
      console.log('users state', state.users)
      state.users.find(user => user.id === action.meta.arg.userId).followed = false
    }).addCase(unfollowUser.rejected, (state, action) => {
      console.log('rejected', action.payload)
      state.followingInProgressUsers.splice(state.followingInProgressUsers.indexOf(action.meta.arg.userId), 1)
    })
}})

export default usersSlice.reducer

export const {follow, unfollow, setUsers, setCurrentPage} = usersSlice.actions


