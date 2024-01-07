import axios from "axios";
import { customHistory } from "../../CustomBrowsertHistory";
import Cookies from 'universal-cookie';

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
      customHistory.push("sign-in");
      const cookies = new Cookies();
      cookies.remove("authToken")
    }
    return error.response;
    // Promise.reject(
    //   (error.response && error.response.data) || "Something went wrong"
    // );
  }
);

api.interceptors.request.use(
  (config) => {
    const cookies = new Cookies();
    let cookie = cookies.get('authToken')
    if (cookie) {
      config.headers["Authorization"] = `Bearer ` + cookie;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
