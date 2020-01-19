import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3339"
});
export default api;
