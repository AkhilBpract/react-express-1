import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      return (window.location = "/auth/login");
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

axiosInstance.interceptors.request.use(function (config) {
  // const token = localStorage.getItem("accessToken");
  // if (token) {
  //   config.headers.Authorization = "Bearer ";
  // }

  return config;
});

export default axiosInstance;
