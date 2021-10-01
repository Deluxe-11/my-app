import { useMutation } from 'react-query';
import { IComment } from '@src/models/IComment';
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from '@src/types/Response';
import { fetchAddComment } from '@src/services';

export default function useAddComment() {
  return useMutation<IComment, AxiosError<Response<null>>, IComment>(
    'add_comment',
    async (comment: IComment) => {
      const response: AxiosResponse<Response<IComment>> = await fetchAddComment(
        comment
      );
      return response.data.data;
    }
  );
}
