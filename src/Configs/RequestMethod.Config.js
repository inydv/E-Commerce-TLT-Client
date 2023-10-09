import axios from "axios";

const BASE_URL = "http://localhost:5000";

const request = axios.create({
  baseURL: BASE_URL + "/api/v1/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});

export { request };
