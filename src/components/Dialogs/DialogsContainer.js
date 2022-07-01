import {
  addMessageActionCreator,
  addMessageTextActionCreator,
} from "../Redux/dialogs-reducer";

import Dialogs from "./Dialogs";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    addMessageText: (messageText) => {
      dispatch(addMessageTextActionCreator(messageText));
    },
  };
};

const SuperDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default SuperDialogsContainer;
