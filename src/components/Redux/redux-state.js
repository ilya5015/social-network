import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  authReducer: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
