import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
    //   clearSession();
      return (window.location = "/auth/login");
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});
