import Comment from '@src/components/Comment';
import React, { useEffect, useState } from 'react';
import useLessonContext from '@src/features/lesson/hooks/useLessonContext';
import { IComment } from '@src/models/IComment';
import useAppContext from '@src/context/useAppContext';
import { useAppDispatch } from '@src/apps/store';
import { showNotification } from '@src/apps/slice';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAddComment from '@src/hooks/useAddComment';
import { useRouter } from 'next/router';

interface Comment {
  content: string;
}

function Overview() {
  const data = useLessonContext();
  const app = useAppContext();

  const {
    query: { lesson_id }
  } = useRouter();

  const [comments, setComments] = useState<IComment[]>([]);

  const dispatch = useAppDispatch();

  const { handleSubmit, register, reset, watch } = useForm<Comment>();

  useEffect(() => {
    if (!data?.lesson?.comments) return;
    setComments(data.lesson.comments);
  }, [data]);

  useEffect(() => {
    if (!app?.socket) return;

    const { socket } = app;

    socket.on('add-comment', (comment: IComment) => {
      // setComments([...comments, comment]);
      setComments((prevState) => [comment, ...prevState]);
    });
  }, [app, dispatch]);

  const addComment = useAddComment();

  const submit = (data: Comment) => {
    addComment.mutate({
      content: data.content.trim(),
      commentable_id: lesson_id?.toString() || ''
    });

    reset({
      content: ''
    });
  };

  return (
    <div>
      <div className={'w-full'}>
        <form onSubmit={handleSubmit(submit)} action="">
          <TextField
            {...register('content')}
            fullWidth
            label={'Binh luan'}
            // multiline
          />

          <div className={'flex justify-end mt-10'}>
            <Button type={'reset'} color={'primary'} variant={'contained'}>
              Huy
            </Button>
            <Button
              className={'ml-6'}
              disabled={!watch('content')?.trim()}
              type={'submit'}
              color={'primary'}
              variant={'contained'}
            >
              Binh luan
            </Button>
          </div>
        </form>
      </div>

      {comments?.map((item) => (
        <div key={item.id} className={'mt-10'}>
          <Comment content={item.content} />
        </div>
      ))}
    </div>
  );
}

export default Overview;
