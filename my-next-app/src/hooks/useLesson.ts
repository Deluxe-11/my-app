import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from '@src/types/Response';
import { ILesson } from '@src/models/ILesson';
import { fetchLesson } from '@src/services';
import { useRouter } from 'next/router';

export default function useLesson() {
  const {
    query: { lesson_id }
  } = useRouter();

  return useQuery<ILesson, AxiosError<Response<null>>>(
    ['lesson', lesson_id],
    async () => {
      if (Array.isArray(lesson_id)) throw new Error();
      const response: AxiosResponse<Response<ILesson>> = await fetchLesson(
        lesson_id || ''
      );
      return response.data.data;
    },
    {
      enabled: !!lesson_id
    }
  );
}
