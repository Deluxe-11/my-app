import { useQuery } from 'react-query';
import { fetchMe } from '@src/services';
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from '@src/types/Response';
import { ResponseLogin } from '@src/features/auth/types';
import { useAppDispatch } from '@src/apps/store';
import { setLoggedIn } from '@src/features/auth/slice';

export default function useUser() {
  const dispatch = useAppDispatch();

  return useQuery<
    AxiosResponse<Response<ResponseLogin>>,
    AxiosError<Response<null>>
  >(
    'auth',
    () => {
      if (!localStorage.getItem('token')) throw new Error('hihi');
      return fetchMe();
    },
    {
      onSuccess(response) {
        dispatch(
          setLoggedIn({
            isLoggedIn: true,
            user: response.data.data.user
          })
        );
      },
      onError(error) {
        console.log(error);
      }
    }
  );
}
