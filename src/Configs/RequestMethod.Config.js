// AXIOS
import axios from "axios";

// CUSTOM IMPORT
import EnumConstant from "../Constants/Enum.Constant.json";

// BASE URL
const BASE_URL = import.meta.env.VITE_ENVIRONMENT === EnumConstant.Environment.Development ? "http://localhost:5000" : "";

// CREATE REQUEST
const Request = axios.create({
  baseURL: BASE_URL + "/api/v1/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// EXPORT
export { Request };
