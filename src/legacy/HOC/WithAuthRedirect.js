import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux/es/exports";

const WithAuthRedirect = (Component) => {
  class WithAuthRedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;
      else return <Component {...this.props} />;
    }
  }

  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authReducer.isAuth,
  });

  let connectedWithAuthRedirect = connect(mapStateToPropsForRedirect)(
    WithAuthRedirectComponent
  );

  return connectedWithAuthRedirect;
};

export default WithAuthRedirect;
