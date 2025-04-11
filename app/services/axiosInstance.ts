// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
