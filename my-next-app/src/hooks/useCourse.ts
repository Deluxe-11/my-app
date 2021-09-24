import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { fetchCourse } from '@src/services';
import { ICourse } from '@src/models/ICourse';
import { Response } from '@src/types/Response';

export default function useCourse(id: string) {
  return useQuery<ICourse, AxiosError<Response<any>>>(
    ['course', id],
    async () => {
      const response: AxiosResponse<Response<ICourse>> = await fetchCourse(id);
      return response.data.data;
    },
    {
      onSuccess(data) {
        console.log(data);
      }
    }
  );
}
