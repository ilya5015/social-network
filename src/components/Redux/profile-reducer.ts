import { profileApi } from "../../api/api";
import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";

type InitialStateType = {
  postData: any,
  profile: ProfileType,
  userStatus: string
}

type ProfileType = {
  id: number
  email: string,
  name: string,
  status: string
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
  profile: {
    id: 0,
    email: '',
    name: '',
    status: ''
  },
  userStatus: "",
};

export const fetchUser = createAsyncThunk(
  'profile/fetchUser',
  async ({userId}:any, {rejectWithValue}) => {
    const data = await profileApi.getUser(userId);
    return data
  }
)

export const fetchAuthUserProfile = createAsyncThunk(
  'profile/setAuthUserProfile',
  async (_, {rejectWithValue}) => {
    let data = await profileApi.getAuthUserProfile();
    console.log("authUser profile data is:", data);
    return data
  })

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
    setAuthUserProfile: (state, action: PayloadAction<ProfileType>) => {
      state.profile = action.payload
    }
  },
  extraReducers:
  (builder) => {
    builder.addCase(fetchUser.pending, (state,action) => {
      console.log('User is fetching', action.meta.arg.myId)
    }).addCase(fetchUser.fulfilled, (state,action) => {
      state.profile = {id: action.payload.id, email: action.payload.email, name: action.payload.name, status: action.payload.status}
      console.log('User fulfilled', action.payload)
    }).addCase(fetchUser.rejected, (state,action) => {
      console.log('User rejected', action.error)
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
    //
    .addCase(fetchAuthUserProfile.pending, (state, action) => {
      console.log('Auth user is fetching')
    })
    .addCase(fetchAuthUserProfile.fulfilled, (state, action) => {
      state.profile = {id: action.payload.id, email: action.payload.email, name: action.payload.name, status: action.payload.status}
      console.log('Auth user fulfilled', action.payload)
    })
    .addCase(fetchAuthUserProfile.rejected, (state, action) => {
      console.log('Auth user rejected', action.error)
    })
}})

export default profileSlice.reducer;
