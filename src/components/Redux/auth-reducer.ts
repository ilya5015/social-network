import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { headerApi } from "../../api/api";
import {RootState} from './store'
import { ThunkAction } from "redux-thunk"
import { AnyAction } from 'redux'

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUserData: (state, action: PayloadAction<AuthUserDataType>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.login = action.payload.login
      state.isAuth = true
    }
  }
})

export const {setAuthUserData} = authSlice.actions

export default authSlice.reducer

export const thunkSetAuthUser = () => {
  return async (dispatch : any) => {
    let data = await headerApi.getAuthUser();
    console.log("authUser data is:", data);
    if (data !== false) {
      dispatch(setAuthUserData(data.data));
    }
  };
};

export const thunkLoginUser = (loginData: any) : ThunkAction<void, RootState, unknown, AnyAction> => {
  return async () => {
    return headerApi.login(loginData).then((data) => {
      console.log("User logged in !", data);
    });
  };
}
