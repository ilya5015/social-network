import { chatApi } from "../../api/chatApi";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  messages: Array<any>,
  status: string
}

type ChatMessageDataType = {
  userId: number,
  userName: string,
  message: string,
  photo: string
}

type ChatMessagesDataType = Array<ChatMessageDataType>

let initialState: InitialStateType = {
  messages: [],
  status: "ready",
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<ChatMessagesDataType>) => {
      state.messages = action.payload
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    }
  }
})

export const {setMessages, changeStatus} = chatSlice.actions


export default chatSlice.reducer;

let _newMessagesHandler: any = null;

const newMessagesHandlerCreator = (dispatch: any) : any => {
  if (_newMessagesHandler === null) {
    _newMessagesHandler = (messages: any) => {
      dispatch(setMessages(messages));
    };
  } else {
    _newMessagesHandler = null;
  }
  return _newMessagesHandler;
};

export const startMessagesListening = () => async (dispatch:any) => {
  chatApi.start();
  chatApi.subscribeNewMessages(newMessagesHandlerCreator(dispatch));
};

export const stopMessagesListening = () => async (dispatch:any) => {
  chatApi.subscribeNewMessages(newMessagesHandlerCreator(dispatch))();
  chatApi.stop();
};

export const sendMessage = async (message:string) => {
  chatApi.sendMessage(message);
};