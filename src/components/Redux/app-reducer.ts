import { setAuthUser } from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED";

type AppReducerActionType = {
  type: string
}

type SetInitializedActionType = {
  type: typeof SET_INITIALIZED
}

type InitialStateType = {
  initialized: boolean
}

let initialState : InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: AppReducerActionType) : InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export default appReducer;

export const setInitialized = (): SetInitializedActionType => {
  return { type: SET_INITIALIZED };
};

export const initializeApp = () => async (dispatch: any) => {
  await dispatch(setAuthUser()).then(() => {
    dispatch(setInitialized());
  });
};
