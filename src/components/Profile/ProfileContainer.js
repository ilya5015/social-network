import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUser } from "../Redux/profile-reducer";

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProps;
}

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.userId = this.props.router.params.userId;
  }

  componentDidMount() {
    let userId = this.userId;
    if (userId != null) {
      this.props.getUser(userId);
    }
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getUser })(
  withRouter(ProfileContainer)
);
