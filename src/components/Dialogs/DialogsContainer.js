import { addMessage, addMessageText } from "../Redux/dialogs-reducer";

import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  addMessageText,
})(Dialogs);

export default WithAuthRedirect(DialogsContainer);
