import axios, { AxiosInstance  } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "api/posts/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;