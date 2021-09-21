import axios from 'axios';

const mainAPI = axios.create();

mainAPI.defaults.baseURL =
  process.env.NEXT_PUBLIC_BASE_URL_LARAVEL || 'http://127.0.0.1:8000';

export default mainAPI;
