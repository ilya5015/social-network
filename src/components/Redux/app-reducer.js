import { setAuthUser } from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
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

export const setInitialized = () => {
  return { type: SET_INITIALIZED };
};

export const initializeApp = () => (dispatch) => {
  dispatch(setAuthUser()).then(() => {
    dispatch(setInitialized());
  });
};
