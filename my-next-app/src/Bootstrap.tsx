import useUser from '@src/hooks/useUser';
import Notification from '@src/components/Notifcation';
import { useEffect } from 'react';
import socket from '@src/config/network/socket';
import useAppContext, { AppProvider } from '@src/context/useAppContext';
import { io } from 'socket.io-client';
import useNotification from '@src/hooks/useNotification';

function Bootstrap() {
  useUser();

  const app = useAppContext();

  const fire = useNotification('snackbar');

  useEffect(() => {
    if (!app?.socket) return;

    const { socket } = app;

    socket.on('connect', () => {
      socket.emit('join-room', {
        room: '1'
      });

      socket.on('add-comment', () => {
        fire.primary(
          'Co nguoi vua binh luan bai hoc nay',
          'Co nguoi binh luan'
        );
      });
    });
  }, []);

  return (
    <>
      <Notification />
    </>
  );
}

export default Bootstrap;
