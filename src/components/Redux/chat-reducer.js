// import { chatApi } from "../../api/socketApi";
// import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

// type InitialStateType = {
//   messages: Array<any>,
//   status: string,
// };

// type ChatMessageDataType = {
//   userId: number,
//   userName: string,
//   message: string,
//   photo: string,
// };

// type ChatMessagesDataType = Array<ChatMessageDataType>;

// let initialState: InitialStateType = {
//   messages: [],
//   status: "ready",
// };

// const chatSlice = createSlice({
//   name: "chat",
//   initialState,
//   reducers: {
//     setMessages: (state, action: PayloadAction<ChatMessagesDataType>) => {
//       state.messages = action.payload;
//     },
//     changeStatus: (state, action: PayloadAction<string>) => {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setMessages, changeStatus } = chatSlice.actions;

// export const fetchGetMessage = createAsyncThunk(
//   "profile/setAuthUserProfile",
//   async (_, { rejectWithValue }) => {
//     let data = await profileApi.getAuthUserProfile();
//     console.log("authUser profile data is:", data);
//     return data;
//   }
// );
