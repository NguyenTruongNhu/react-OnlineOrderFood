import axios from "axios";

export const API_URL =
  "https://onlinefood-dot-basic-thinker-419102.et.r.appspot.com";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
