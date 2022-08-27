import React from "react";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

type Props = {
  totalUsers: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (page: number) => void,
  users: Array<user>,
  followingInProgressUsers: Array<number>,
  unfollow: (userId: number) => void,
  follow: (userId: number) => void
}

type user = {
  id: number,
  name: string,
  status?: string,
  photos: photos,
  followed: boolean
}

type photos = {
  small?: string,
  large?: string
}

const Users = ({totalUsers, pageSize, currentPage, onPageChanged, users, followingInProgressUsers, unfollow, follow} : Props) => {
  let pagesCount = Math.ceil(totalUsers / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className="Paginator">
        <Paginator
          pages={pages}
          currentPage={currentPage}
          portionSize={pageSize}
          onPageChanged={onPageChanged}
        />
      </div>

      <div>
        {users.map((user) => (
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
                    disabled={followingInProgressUsers.some(
                      (userId) => user.id === userId
                    )}
                    onClick={() => {
                      unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgressUsers.some(
                      (userId) => user.id === userId
                    )}
                    onClick={() => {
                      follow(user.id);
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
