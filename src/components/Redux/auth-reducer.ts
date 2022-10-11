import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, registrationApi } from "../../api/api";

type InitialStateType = {
  id: number|null,
  email: string|null,
  login: string|null,
  isFetching: boolean,
  isAuth: boolean,
  isRedirect: boolean
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
  isRedirect: false
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

export const registerUser = createAsyncThunk(
  `auth/registerUser`,
  async ({registrationData}: any, {rejectWithValue}) => {
    console.log('REGISTRATION DATA IS', registrationData)
    let data = await registrationApi.registerUser(registrationData)
    console.log('REGISTRATION API DATA IS', data)
    return data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleIsFetching(state, action) {
      state.isFetching = action.payload.toggler
    },
    toggleIsRedirect(state, action) {
      state.isRedirect = action.payload.isRedirect
    }
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
        state.isAuth = true
      }).addCase(loginUser.rejected, (state, action) => {
        console.log('Fetching login user rejected', action.error)
      })
      //
      .addCase(registerUser.pending, (state, action) => {
        console.log('Fetching register user pending')
      }).addCase(registerUser.fulfilled, (state, action) => {
        console.log('Fetching register user fulfilled', action)
      }).addCase(registerUser.rejected, (state, action) => {
        console.log('Fetching register user rejected', action.error)
      })
    }
  
})

export const { toggleIsFetching, toggleIsRedirect } = authSlice.actions

export default authSlice.reducer
