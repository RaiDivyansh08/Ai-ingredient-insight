import axios from "axios";

const API = axios.create({
  baseURL: "https://ingredient-insight-backend.onrender.com/api",
});

export default API;