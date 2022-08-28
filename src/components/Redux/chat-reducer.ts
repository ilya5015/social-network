import { chatApi } from "../../api/chatApi";

const SET_MESSAGES = "SET-MESSAGES";
const SET_STATUS = "SET-STATUS";

type InitialStateType = {
  messages: Array<any>,
  status: string
}

type ChatReducerActionType = {
  type: string,
  messages?: Array<any>,
  status?: string
}

type SetMessagesActionCreatorType = {
  type: typeof SET_MESSAGES,
  messages: Array<any>
}

type SetStatusActionCreatorType = {
  type: typeof SET_STATUS,
  status: string
}

let initialState: InitialStateType = {
  messages: [],
  status: "ready",
};

const chatReducer = (state = initialState, action: ChatReducerActionType): InitialStateType => {
  switch (action.type) {
    case "SET-MESSAGES": 
      if (action.messages) {
      return {
        ...state,
        messages: [...state.messages, ...action.messages],
      }}
    return state
    case "CHANGE-STATUS": 
      if (action.status) {
      return {
        ...state,
        status: action.status,
      }}
      return state
    default:
      return state;
  }
};

export default chatReducer;

let _newMessagesHandler: any = null;

const newMessagesHandlerCreator = (dispatch: any) : any => {
  if (_newMessagesHandler === null) {
    _newMessagesHandler = (messages: any) => {
      dispatch(messagesSet(messages));
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

export const messagesSet = (messages:any):SetMessagesActionCreatorType => {
  return { type: SET_MESSAGES, messages };
};

export const changeStatus = (status:any):SetStatusActionCreatorType => {
  return { type: SET_STATUS, status };
};
