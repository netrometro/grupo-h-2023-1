import axios from "axios";

const api = axios.create({
  baseURL: "https://repsonsumer-api.onrender.com/api/praticas/",
});

export default api;
