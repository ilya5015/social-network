import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUser } from "../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, { setAuthUser })(HeaderContainer);
