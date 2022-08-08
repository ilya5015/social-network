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
import { Navigate } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        userId={params.userId}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProps;
}

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMyProfile: true,
    };
  }

  componentDidMount() {
    // console.log("PROPSSS", this.props);
    // console.log(this.props.userId);
    // this.props.getUser(this.props.userId);
    // this.props.getUserStatus(this.props.userId);

    let userIdFromPath = this.props.userId;
    let authorisedUserId = this.props.authorisedUserId;

    console.log("Mounted", userIdFromPath, authorisedUserId);

    if (userIdFromPath) {
      this.props.getUser(userIdFromPath);
      this.props.getUserStatus(userIdFromPath);
    } else {
      if (this.props.isAuth) {
        this.props.getUser(authorisedUserId);
        this.props.getUserStatus(authorisedUserId);
      }
    }
  }

  componentDidUpdate() {
    let userIdFromPath = this.props.userId;
    let authorisedUserId = this.props.authorisedUserId;
    let isShowMyProfile = this.state.isShowMyProfile;

    if (isShowMyProfile) {
      if (userIdFromPath === authorisedUserId) {
        this.setState({ isShowMyProfile: false });
      }

      if (!userIdFromPath && this.props.isAuth) {
        this.props.getUser(authorisedUserId);
        this.props.getUserStatus(authorisedUserId);
        this.setState({ isShowMyProfile: false });
      }
    }
  }

  render() {
    if (!this.props.isAuth && !this.props.userId) {
      return <Navigate to={"/login"} />;
    }
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        userStatus={this.props.userStatus}
        updateUserStatus={this.props.updateUserStatus}
        currentId={this.props.userId}
        myId={this.props.authorisedUserId}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userStatus: state.profilePage.userStatus,
  authorisedUserId: state.authReducer.id,
  isAuth: state.authReducer.isAuth,
});

export default compose(
  connectedWithAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getUser, getUserStatus, updateUserStatus })
)(ProfileContainer);
