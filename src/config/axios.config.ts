import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mazrealty.onrender.com/",
  timeout: 100000,
});

export default axiosInstance;
