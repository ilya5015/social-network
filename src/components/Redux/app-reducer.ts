import { createSlice } from "@reduxjs/toolkit"
import { fetchAuthUser } from "./auth-reducer"
import {RootState} from './store'
import { ThunkAction } from "redux-thunk"
import { AnyAction } from 'redux'

type InitialStateType = {
  initialized: boolean
}

let initialState : InitialStateType = {
  initialized: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitialized: state => {
      state.initialized = true
    }
  }
})

export const {setInitialized} = appSlice.actions 

export default appSlice.reducer;

export const thunkInitializeApp = () : ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  await dispatch(fetchAuthUser()).then(() => {
    dispatch(setInitialized());
  });
};
