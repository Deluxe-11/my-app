import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AuthSlice } from '../features/auth/slice';
import { AppSlice } from '@src/apps/slice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    app: AppSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
