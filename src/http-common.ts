import axios, { AxiosInstance  } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/posts/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;