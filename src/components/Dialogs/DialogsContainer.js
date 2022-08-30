import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {};
};

export default compose(connect(mapStateToProps, {}), WithAuthRedirect)(Dialogs);
