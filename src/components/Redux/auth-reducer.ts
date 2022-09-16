import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../api/api";

type InitialStateType = {
  id: number|null,
  email: string|null,
  login: string|null,
  isFetching: boolean,
  isAuth: boolean
}

type AuthUserDataType = {
  id: number,
  email: string,
  login: string
}

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

export const fetchAuthUser = createAsyncThunk(
  'auth/setAuthUser',
  async (_, {rejectWithValue}) => {
    let data = await authApi.getAuthUser();
    console.log("authUser data is:", data);
    return data
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({loginData}: any, {rejectWithValue}) => {
    console.log('LOGIN DATA IS', loginData)
    let data = await authApi.login(loginData);
    console.log("loginUser data is:", data);
    return data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
  extraReducers: 
    (builder) => {
      builder.addCase(fetchAuthUser.pending, (state, action) => {
        console.log('Fetching auth user pending')
      }).addCase(fetchAuthUser.fulfilled, (state, action) => {
        console.log('Fetching auth user fulfilled', action)
        state.id = action.payload.id
      state.email = action.payload.email
      state.login = action.payload.login
      state.isAuth = true
      
      }).addCase(fetchAuthUser.rejected, (state, action) => {
        console.log('Fetching auth user rejected', action.error)
      })
      //
      .addCase(loginUser.pending, (state, action) => {
        console.log('Fetching login user pending')
      }).addCase(loginUser.fulfilled, (state, action) => {
        console.log('Fetching login user fulfilled', action.payload)
      }).addCase(loginUser.rejected, (state, action) => {
        console.log('Fetching login user rejected', action.error)
      })
    }
  
})

export default authSlice.reducer
