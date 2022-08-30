import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import chatReducer from "./chat-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: 
  {profilePage: profileReducer,
  usersPage: usersReducer,
  authReducer: authReducer,
  appReducer: appReducer,
  chatReducer: chatReducer}
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
