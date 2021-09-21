import { IUser } from '@src/models/IUser';

export interface LoginForm {
  email: string;
  password: string;
}

export interface ResponseLogin {
  token: string;
  user: IUser;
}
