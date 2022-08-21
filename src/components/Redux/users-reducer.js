import { usersApi } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROCESS = "TOGGLE-FOLLOWING-PROCESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgressUsers: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          } else {
            return user;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          } else {
            return user;
          }
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.totalUsers,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROCESS:
      return {
        ...state,
        followingInProgressUsers: action.isFetching
          ? [...state.followingInProgressUsers, action.userId]
          : state.followingInProgressUsers.filter(
              (userId) => userId !== action.userId
            ),
      };
    default:
      return state;
  }
};

export const followSucceeded = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowSucceeded = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsers = (totalUsers) => {
  return { type: SET_TOTAL_USERS, totalUsers };
};
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleFollowingProcess = (isFetching, userId) => {
  return { type: TOGGLE_FOLLOWING_PROCESS, isFetching, userId };
};

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcess(true, userId));
    let data = await usersApi.followUser(userId);
    if (data.resultCode === 0) {
      dispatch(followSucceeded(userId));
    }
    dispatch(toggleFollowingProcess(false, userId));
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcess(true, userId));
    let data = await usersApi.unfollowUser(userId);
    if (data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowingProcess(false, userId));
  };
};

export default usersReducer;
