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

  followUser(userId: number) {
    return apiInstance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  unfollowUser(userId: number) {
    return apiInstance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileApi = {
  getUser(userId: number) {
    return apiInstance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  getUserStatus(userId: number) {
    return apiInstance.get(`profile/status/${userId}`).then((response) => {
      console.log(response.data);
      return response.data;
    });
  },

  setStatus(userStatus: string) {
    return apiInstance
      .put(`profile/status`, { status: userStatus })
      .then((response) => {
        if (response.data.resultCode === 0) return response.data.data;
      });
  },
};

export const headerApi = {
  getAuthUser() {
    return apiInstance
      .get(`auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data.resultCode === 0) {
          console.log(response.data.data);
          return response.data;
        } else {
          return false;
        }
      });
  },
  login(loginData: any) {
    return apiInstance
      .post(`auth/login`, {
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
      })
      .then((response) => {
        console.log(response);
        if (response.data.resultCode === 0) {
          console.log(response.data.data);
        } else {
          return response.data.messages;
        }
      });
  },
};
