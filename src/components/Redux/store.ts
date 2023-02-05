import authSlice from "./auth-reducer";
import profileSlice from "./profile-reducer";
import usersSlice from "./users-reducer";
import appSlice from "./app-reducer";
import boardSlice from "./board-reducer"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: 
  {profilePage: profileSlice,
  usersPage: usersSlice,
  authReducer: authSlice,
  appReducer: appSlice,
  boardReducer: boardSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
