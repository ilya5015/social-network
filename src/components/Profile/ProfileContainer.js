import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUser,
  getUserStatus,
  updateUserStatus,
} from "../Redux/profile-reducer";
import connectedWithAuthRedirect from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        userId={params.userId ? params.userId : "2"}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProps;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log("PROPSSS", this.props);
    console.log(this.props.userId);
    this.props.getUser(this.props.userId);
    this.props.getUserStatus(this.props.userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        userStatus={this.props.userStatus}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userStatus: state.profilePage.userStatus,
});

export default compose(
  connectedWithAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getUser, getUserStatus, updateUserStatus })
)(ProfileContainer);
