import axios from "axios";
import { message } from "antd";
import { getParsedJson } from "lib/utils";

const http = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const localStorageToken = getParsedJson(localStorage.getItem("token"));

  if (localStorageToken) {
    const token = `Bearer ${localStorageToken}`;
    config.headers.Authorization = token;
  }

  return config;
});

http.interceptors.response.use(null, (error) => {
  if (error?.response?.data?.message) {
    if (typeof error?.response?.data?.message === "object") {
      const keys = Object.keys(error?.response?.data?.message);
      for (const key of keys) {
        message.error(error.response.data.message[key]?.toString());
      }
      return { error };
    }
    message.error(error.response.data.message);
    return { error };
  }

  message.error("Something went wrong!");

  return { error };
});

export default http;
