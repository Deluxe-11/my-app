import axios from 'axios';
import { refresh } from '@src/services';

const mainAPI = axios.create();

const nodeAPI = axios.create();

nodeAPI.defaults.baseURL = 'http://localhost:3333';

export { nodeAPI };

mainAPI.defaults.baseURL =
  process.env.NEXT_PUBLIC_BASE_URL_LARAVEL || 'http://127.0.0.1:8000';

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');

  if (!!token) {
    mainAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

mainAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status, data } = error.response;

    if (status !== 401 || data.message !== 'Token Expired')
      return Promise.reject(error);

    return refresh()
      .then((response) => {
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        error.config.headers['Authorization'] = `Bearer ${token}`;
        return mainAPI.request(error.config);
      })
      .catch((err) => {});
  }
);

export default mainAPI;
