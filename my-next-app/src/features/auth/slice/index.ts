import { IUser } from '@src/models/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<AuthState>) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    }
  }
});

export const { setLoggedIn } = AuthSlice.actions;

export default AuthSlice.reducer;
