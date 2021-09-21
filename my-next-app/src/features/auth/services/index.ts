import mainAPI from '@src/config/network';
import { LoginForm } from '@src/features/auth/types';

export const fetchLogin = (data: LoginForm) => {
  return mainAPI.post('/api/v1/login', data);
};
