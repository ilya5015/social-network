import authReducer, { setAuthUserData } from "../auth-reducer";

describe("authReducer test", () => {
  let state = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
  };

  it("SET-USER-DATA action succeeded", () => {
    let data = { id: 1, email: "ilya@yandex.ru", login: "ilya" };

    let action = setAuthUserData(data);

    let newState = authReducer(state, action);

    expect(newState).toEqual({
      id: 1,
      email: "ilya@yandex.ru",
      login: "ilya",
      isFetching: false,
      isAuth: true,
    });
  });
});
