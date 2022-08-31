import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  thunkFollowUser,
  thunkUnfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  thunkGetUsers,
} from "../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader isFetching={this.props.isFetching} />
        ) : null}
        <Users
          currentPage={this.props.currentPage}
          totalUsers={this.props.totalUsers}
          pageSize={this.props.pageSize}
          users={this.props.users}
          isFetching={this.props.isFetching}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          toggleIsFetching={this.props.toggleIsFetching}
          followingInProgressUsers={this.props.followingInProgressUsers}
          toggleFollowingProcess={this.props.toggleFollowingProcess}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgressUsers: state.usersPage.followingInProgressUsers,
  };
};

export default connect(mapStateToProps, {
  follow: thunkFollowUser,
  unfollow: thunkUnfollowUser,
  setUsers: setUsers,
  setCurrentPage: setCurrentPage,
  setTotalUsers: setTotalUsers,
  getUsers: thunkGetUsers,
})(UsersContainer);
