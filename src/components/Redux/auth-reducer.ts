import { headerApi } from "../../api/api";

const SET_USER_DATA = "SET-USER-DATA";

type InitialStateType = {
  id: number|null,
  email: string|null,
  login: string|null,
  isFetching: boolean,
  isAuth: boolean
}

type SetUserDataActionType = {
  type: typeof SET_USER_DATA,
  data: LoginDataType
}

type LoginDataType = {
  login: string,
  email: string,
  rememberMe: boolean
}

type ActionType = {
  type: string,
  data: any
}

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (data: any) => ({ type: SET_USER_DATA, data});

export const setAuthUser = () => {
  return async (dispatch : any) => {
    let data = await headerApi.getAuthUser();
    console.log("authUser data is:", data);
    if (data !== false) {
      dispatch(setAuthUserData(data.data));
    }
  };
};

export const loginUser = (loginData: any) => {
  return () => {
    return headerApi.login(loginData).then((data: any) => {
      console.log("User logged in !", data);
    });
  };
};

export default authReducer;
