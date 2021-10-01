import { createContext, useContext } from 'react';
import { io, Socket } from 'socket.io-client';

interface App {
  socket: Socket;
}

const AppContext = createContext<App | null>(null);

export const AppProvider = AppContext.Provider;

export default function useAppContext() {
  return useContext(AppContext);
}
