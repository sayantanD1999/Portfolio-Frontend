import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response.status == 401) {
      //   location.replace(appRoutes.LOGIN);
    }
    return error.response;
    // Promise.reject(
    //   (error.response && error.response.data) || "Something went wrong"
    // );
  }
);

api.interceptors.request.use(
  (config) => {
    // if (hasCookie("authToken")) {
    //   config.headers["Authorization"] = "Bearer " + `${getCookie("authToken")}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
