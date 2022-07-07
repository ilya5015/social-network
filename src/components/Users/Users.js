import axios from "axios";
import React from "react";
import styles from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          console.log(response);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsers(response.data.totalCount);
        });
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        console.log(response);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                className={
                  this.props.currentPage === page
                    ? styles.selectedPage
                    : styles.page
                }
                onClick={() => {
                  this.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>

        <div>
          {this.props.users.map((user) => (
            <div key={user.id}>
              <span>
                <div>
                  <img
                    src={
                      user.photos.small != null
                        ? (user.photos.small =
                            "https://temperaturka.com/wp-content/uploads/5/d/f/5dfafb5bc640c3978688e632a5aa46f3.jpe")
                        : user.photos.small
                    }
                    width="100"
                    height="100"
                  />
                </div>
                <div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
                <span>
                  <div>{"user.location.city"}</div>
                  <div>{"user.location.country"}</div>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
