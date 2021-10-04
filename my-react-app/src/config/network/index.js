import axios from "axios";

const mainAPI = axios.create();

mainAPI.defaults.baseURL =
  process.env.REACT_APP_BASE_BACKEND_URL || "http://localhost";

export default mainAPI;
