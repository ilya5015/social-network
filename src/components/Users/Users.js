import { NavLink } from "react-router-dom";
import { usersApi } from "../../api/api";
import styles from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
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
                props.currentPage === page ? styles.selectedPage : styles.page
              }
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>

      <div>
        {props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
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
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgressUsers.some(
                      (userId) => user.id === userId
                    )}
                    onClick={() => {
                      props.toggleFollowingProcess(true, user.id);
                      usersApi.unfollowUser(user.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                        props.toggleFollowingProcess(false, user.id);
                      });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgressUsers.some(
                      (userId) => user.id === userId
                    )}
                    onClick={() => {
                      props.toggleFollowingProcess(true, user.id);
                      usersApi.followUser(user.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.follow(user.id);
                        }
                        props.toggleFollowingProcess(false, user.id);
                      });
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
};

export default Users;
