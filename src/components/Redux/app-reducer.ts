import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/api";
import { fetchAuthUser } from "./auth-reducer";

type InitialStateType = {
  initialized: boolean;
  isChatMiniOpen: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
  isChatMiniOpen: false,
};

export const initializeApp = createAsyncThunk(
  "app/initializeApp",
  async (_, { rejectWithValue, dispatch }) => {
    let data = await dispatch(fetchAuthUser());
    console.log("App authUser data is:", data);
    return data;
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitialized: (state) => {
      state.initialized = false;
    },
    setIsChatMiniOpen: (state, action) => {
      state.isChatMiniOpen = action.payload.toggler;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state, action) => {
        console.log("Initialize app pending");
      })
      .addCase(initializeApp.fulfilled, (state, action) => {
        console.log("Initialize app fulfilled", action.payload);
        state.initialized = true;
      })
      .addCase(initializeApp.rejected, (state, action) => {
        console.log("Initialize app rejected", action.error);
      });
  },
});

export const { setIsChatMiniOpen } = appSlice.actions;

export default appSlice.reducer;
