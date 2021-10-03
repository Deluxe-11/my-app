import mainAPI from '@src/config/network';
import { LoginForm } from '@src/features/auth/types';

export const fetchLogin = (data: LoginForm) => {
  return mainAPI.post('/api/v1/login', data);
};

export const fetchRegister = (data: {
  email: string;
  name: string;
  password: string;
}) => {
  return mainAPI.post('/api/v1/register', data);
};
