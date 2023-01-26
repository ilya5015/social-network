import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { threadsApi } from "../../api/api";

type InitialStateType = {
  isFetching: boolean;
  threads: Array<any>;
};

let initialState: InitialStateType = {
  isFetching: false,
  threads: [],
};

export const fetchPostThread = createAsyncThunk(
  "board/postThread",
  async ({ threadPostingData }: any, { rejectWithValue }) => {
    let response = await threadsApi.postThread(threadPostingData);
    return response.data;
  }
);

export const fetchGetThreads = createAsyncThunk(
  "board/getThreads",
  async (_, { rejectWithValue }) => {
    let response = await threadsApi.getThreads();
    return response.data;
  }
);

export const fetchPostThreadReply = createAsyncThunk(
  "board/postThreadReply",
  async ({ threadReplyPostingData }: any, { rejectWithValue }) => {
    let response = await threadsApi.postThreadReply(threadReplyPostingData);
    return response.data;
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    toggleIsFetching(state, action) {
      state.isFetching = action.payload.toggler;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostThread.pending, (state, action) => {
        console.log("Fetching posting thread pending");
        state.isFetching = true;
      })
      .addCase(fetchPostThread.fulfilled, (state, action) => {
        console.log("Fetching posting thread fulfilled", action);
        state.isFetching = false;
      })
      .addCase(fetchPostThread.rejected, (state, action) => {
        console.log("Fetching posting thread rejected", action.error);
        state.isFetching = false;
      })
      .addCase(fetchGetThreads.pending, (state, action) => {
        console.log("Fetching getting threads pending");
        state.isFetching = true;
      })
      .addCase(fetchGetThreads.fulfilled, (state, action) => {
        console.log("Fetching getting threads pending", action.payload);
        state.threads = action.payload;
        state.isFetching = false;
      })
      .addCase(fetchGetThreads.rejected, (state, action) => {
        console.log("Fetching getting threads pending", action.error);
        state.isFetching = false;
      })
      .addCase(fetchPostThreadReply.pending, (state, action) => {
        console.log("Fetching posting thread reply pending");
        state.isFetching = true;
      })
      .addCase(fetchPostThreadReply.fulfilled, (state, action) => {
        console.log("Fetching posting thread reply fulfilled", action);
        state.isFetching = false;
      })
      .addCase(fetchPostThreadReply.rejected, (state, action) => {
        console.log("Fetching posting thread reply rejected", action.error);
        state.isFetching = false;
      });
  },
});

export const { toggleIsFetching } = boardSlice.actions;

export default boardSlice.reducer;
