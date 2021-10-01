import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';

type typeAlert = 'success' | 'error' | 'info';

interface AppSlice {
  notification: {
    isOpen: boolean;
    title: string;
    description: string;
    type: typeAlert;
  };
}

const initialState: AppSlice = {
  notification: {
    isOpen: false,
    title: '',
    description: '',
    type: 'success'
  }
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        type: typeAlert;
      }>
    ) => {
      state.notification.isOpen = true;
      state.notification.title = action.payload.title;
      state.notification.description = action.payload.description;
      state.notification.type = action.payload.type;
    },
    hideNotification: (state) => {
      state.notification.isOpen = false;
    }
  }
});

const { actions } = AppSlice;

export const { showNotification, hideNotification } = actions;
