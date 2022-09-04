import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { shallowEqual } from "react-redux";
import Paginator from "../common/Paginator/Paginator";
import {
  followUser,
  unfollowUser,
  fetchUsers,
  setCurrentPage,
} from "../Redux/users-reducer";

const Users = () => {
  const dispatch = useAppDispatch();

  const [totalUsers, pageSize, currentPage, users, followingInProgressUsers] =
    useAppSelector(
      (state) => [
        state.usersPage.totalUsers,
        state.usersPage.pageSize,
        state.usersPage.currentPage,
        state.usersPage.users,
        state.usersPage.followingInProgressUsers,
      ],
      shallowEqual
    );

  const [pages, setPages] = useState([]);

  useEffect(() => {
    console.log("fetching users ...");
    dispatch(fetchUsers({ currentPage, pageSize }));
  }, [dispatch, pageSize, currentPage]);

  useEffect(() => {
    let pagesCount = Math.ceil(totalUsers / pageSize);
    let totalPages = [];
    for (let i = 1; i <= pagesCount; i++) {
      totalPages.push(i);
    }
    setPages(totalPages);
  }, [totalUsers, pageSize]);

  const onPageChanged = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div>
      <div>{JSON.stringify(users, 4, 4)}</div>
      <div className="Paginator">
        <Paginator pages={pages} onPageChanged={onPageChanged} />
      </div>
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    src={
                      user.photos.small === null
                        ? "https://temperaturka.com/wp-content/uploads/5/d/f/5dfafb5bc640c3978688e632a5aa46f3.jpe"
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
                      dispatch(unfollowUser({ userId: user.id }));
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
                      dispatch(followUser({ userId: user.id }));
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
