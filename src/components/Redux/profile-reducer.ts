import { profileApi } from "../../api/api";
import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";

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

export const fetchUser = createAsyncThunk(
  'profile/fetchUser',
  async ({userId}:any, {rejectWithValue}) => {
    console.log('Fetching user', userId)
    const data = await profileApi.getUser(userId);
    return data
  }
)

export const fetchUserStatus = createAsyncThunk(
  'profile/fetchUserStatus',
  async ({userId}:any, {rejectWithValue}) => {
    const data = await profileApi.getUserStatus(userId);
    return data
  }
)

export const fetchUpdateUserStatus = createAsyncThunk(
  'profile/fetchUpdateUserStatus',
  async ({userStatus}:any, {rejectWithValue}) => {
    const data = await profileApi.setStatus(userStatus);
    return data
  }
)

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
  extraReducers:
  (builder) => {
    builder.addCase(fetchUser.pending, (state,action) => {
      console.log('User is fetching', action.meta.arg.myId)
    }).addCase(fetchUser.fulfilled, (state,action) => {
      state.profile = action.payload
      console.log('User fulfilled', action.payload)
    }).addCase(fetchUser.rejected, (state,action) => {
      console.log('User rejected', action.error)
    })
    //
    .addCase(fetchUserStatus.pending, (state,action) => {
      console.log('User is fetching', action.meta.arg.myId)
    }).addCase(fetchUserStatus.fulfilled, (state,action) => {
      state.userStatus = action.payload
      console.log('User fulfilled', action.payload)
    }).addCase(fetchUserStatus.rejected, (state,action) => {
      console.log('User rejected', action.payload)
    })
    //
    .addCase(fetchUpdateUserStatus.pending, (state,action) => {
      console.log('User is fetching', action.meta.arg.userStatus)
    })
    .addCase(fetchUpdateUserStatus.fulfilled, (state,action) => {
      console.log('User fulfilled', action.payload)
    })
    .addCase(fetchUpdateUserStatus.rejected, (state,action) => {
      console.log('User rejected', action.payload)
    })
}})

export default profileSlice.reducer;
