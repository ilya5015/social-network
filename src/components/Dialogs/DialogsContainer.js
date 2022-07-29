import { addMessage, addMessageText } from "../Redux/dialogs-reducer";

import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage, addMessageText }),
  WithAuthRedirect
)(Dialogs);
