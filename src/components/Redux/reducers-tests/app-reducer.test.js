import appReducer, { setInitialized } from "../app-reducer";

describe("appReducer test", () => {
  let state = {
    initialized: false,
  };

  it("SET-INITIALIZED action succeeded", () => {
    let action = setInitialized();

    let newState = appReducer(state, action);

    expect(newState.initialized).toBe(true);
  });
});
