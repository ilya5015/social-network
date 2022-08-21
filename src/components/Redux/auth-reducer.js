import { headerApi } from "../../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data: data });

export const setAuthUser = () => {
  return async (dispatch) => {
    let data = await headerApi.getAuthUser();
    console.log("authUser data is:", data);
    if (data !== false) {
      dispatch(setAuthUserData(data.data));
    }
  };
};

export const loginUser = (loginData) => {
  return () => {
    return headerApi.login(loginData).then((data) => {
      console.log("User logged in !", data);
    });
  };
};

export default authReducer;
