import axios from "axios";

type RegistrationDataType = {
  login: string,
  password: string,
  name: string,
  email: string
}

type ThreadPostingDataType = { 
  title: string,
  threadText: string,
  imgs: string,
}

const apiInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: { },
  withCredentials: true,
});

export const usersApi = {
  getUsers() {
    return apiInstance.get(`userData/users`).then((response) => {
      console.log('USERSAPI', response.data)
        return response.data;
    })
}}

export const threadsApi = {
  getThread() {
    return apiInstance.get(`threadsData/getone`)
  },
  getThreads() {
    return apiInstance.get(`threadsData/getall`)
  },
  postThread(threadPostingData: ThreadPostingDataType) {
    return apiInstance.post(`threadsData/create`, {title: threadPostingData.title,
      thread_text: threadPostingData.threadText,
      imgs: threadPostingData.imgs,
      })
  }
}

export const registrationApi = {
  registerUser(registrationData: RegistrationDataType) {
    return apiInstance.post(`userAuthData/registration`, {login: registrationData.login, password: registrationData.password, name: registrationData.name, email: registrationData.email}).then((response) => {
      console.log('REGISTER USER API RESPONSE IS', response.data)
      return response.data
    })
  }
}

export const profileApi = {
  getUser(userId: number) {
    return apiInstance.get(`userData/user/${userId}`).then((response) => {
    console.log('GET USER PROFILE API', response.data)
      return response.data;
  })},
    
  getAuthUserProfile() {
    return apiInstance
      .get(`userData/authuserinfo`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          console.log(response.data.data);
          return response.data;
        } else {
          return false;
        }
      });
  },

  setStatus(userStatus: string) {
    return apiInstance.post(`userData/user/status`, {status: userStatus}).then((response) => {
      console.log('SET USER STATUS API', response.data)
        return response.data;
    }) 
}}

export const authApi = {
  getAuthUser() {
    return apiInstance
      .get(`userAuthData/authuserdata`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          console.log(response.data.data);
          return response.data;
        } else {
          return false;
        }
      });
  },
  login(loginData: any) {
    return apiInstance.post(`userAuthData/login`, {login: loginData.login, password: loginData.password}).then((response) => {
         console.log(response);
         if (response.data.resultCode === 0) {
           console.log(response.data.data);
         } else {
             return response.data.messages;
          }})
  },
};
