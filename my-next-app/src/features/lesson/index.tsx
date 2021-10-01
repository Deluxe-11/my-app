import VideoLesson from '@src/features/lesson/components/VideoLesson';
import { useRouter } from 'next/router';
import useCourse from '@src/hooks/useCourse';
import Playlist from '@src/features/lesson/components/Playlist';
import styled from 'styled-components';
import ContentLesson from '@src/features/lesson/components/ContentLesson';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAppSelector } from '@src/apps/store';
import useAppContext from '@src/context/useAppContext';
import socket from '@src/config/network/socket';
import useLesson from '@src/hooks/useLesson';
import { LessonProvider } from '@src/features/lesson/context';

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  display: flex;
`;

function LessonIndex() {
  const {
    query: { id, lesson_id }
  } = useRouter();

  const app = useAppContext();

  useEffect(() => {
    if (!lesson_id) return;

    if (!app) return;
    const { socket } = app;

    // socket.on('connect', () => {
    //   socket.emit('join-room', {
    //     room: lesson_id
    //   });
    //   // socket.on('join-room-success', (data) => console.log(data));
    //   //
    //   // socket.on('done', (data) => console.log(data));
    // });

    return () => {};
  }, [id, lesson_id, app]);

  const { data } = useCourse('1');

  const { data: lesson } = useLesson();

  return (
    <div className={'flex'}>
      <LessonProvider
        value={{
          lesson
        }}
      >
        <ContentLesson url={'LEh9F67Z5n8'} />

        <Playlist width={25} course={data} />
      </LessonProvider>
    </div>
  );
}

export default LessonIndex;
