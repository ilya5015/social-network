import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "433355e7-ada0-415d-b257-f31539d272e1" },
  withCredentials: true,
});

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return apiInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  followUser(userId) {
    return apiInstance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  unfollowUser(userId) {
    return apiInstance.delete(`follow/${userId}`).then((response) => {
      console.log(response);
      return response.data;
    });
  },
};
