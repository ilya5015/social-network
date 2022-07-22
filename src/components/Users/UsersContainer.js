import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching,
  toggleFollowingProcess,
} from "../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { usersApi } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    if (this.props.users.length === 0) {
      usersApi
        .getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsers(data.totalCount);
        });
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    usersApi.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching,
  toggleFollowingProcess,
})(UsersContainer);
