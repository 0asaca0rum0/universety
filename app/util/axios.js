import axios from "axios";
const Axios = axios.create({
  baseURL: process.env.BACK_URL,
  withCredentials: true,
});
export { Axios };
