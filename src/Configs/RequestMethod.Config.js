// AXIOS
import axios from "axios";

// BASE URL
const BASE_URL = "http://localhost:5000";

// CREATE REQUEST
const Request = axios.create({
  baseURL: BASE_URL + "/api/v1/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// EXPORT
export { Request };
