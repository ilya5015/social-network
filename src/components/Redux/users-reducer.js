const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "Ilya",
      location: { city: "Moscow", country: "Russia" },
      status: "привет",
      isFollowed: false,
      photoUrl: "https://slovnet.ru/wp-content/uploads/2018/12/2-18.jpg",
    },
    {
      id: 2,
      fullName: "Amir",
      location: { city: "Masdar", country: "Emirates" },
      status: "مرحبا",
      isFollowed: false,
      photoUrl:
        "https://i.pinimg.com/originals/5c/4b/4c/5c4b4c5ae28db1a0ba8535f5c3315a97.jpg",
    },
    {
      id: 3,
      fullName: "John",
      location: { city: "New-York", country: "USA" },
      status: "hi there",
      isFollowed: false,
      photoUrl: "https://fight.ru/wp-content/uploads/2020/03/dzhona-sina.jpg",
    },
  ],
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
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users };
};

export default usersReducer;
