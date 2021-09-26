import React from 'react';
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoginForm, ResponseLogin } from '@src/features/auth/types';
import useNotification from '@src/hooks/useNotification';
import { useAppDispatch } from '@src/apps/store';
import { showNotification } from '@src/apps/slice';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from '@src/types/Response';
import { fetchLogin } from '@src/features/auth/services';
import { useRouter } from 'next/router';
import { setLoggedIn } from '@src/features/auth/slice';

function PageAuthLogin() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginForm>({
    defaultValues: {
      email: 'devpro2001@gmail.com',
      password: 'java2001'
    }
  });

  const dispatch = useAppDispatch();

  const history = useRouter();

  const login = useMutation<
    AxiosResponse<Response<ResponseLogin>>,
    AxiosError<Response<any>>,
    LoginForm
  >('login', (data) => fetchLogin(data), {
    onSuccess(response) {
      dispatch(
        setLoggedIn({
          isLoggedIn: true,
          user: response.data.data.user
        })
      );
      localStorage.setItem('token', response.data.data.token);

      history.push('/').then((r) => {
        dispatch(
          showNotification({
            title: 'Thành công',
            description: response.data.message,
            type: 'success'
          })
        );
      });
    },
    onError(error) {}
  });

  const submit = (data: LoginForm) => {
    login.mutate(data);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account hello
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>

          <div>
            {login.isError && (
              <Alert variant="filled" severity="error">
                {login.error?.response?.data.message}
              </Alert>
            )}
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(submit)}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <TextField
                  error={!!errors.email}
                  placeholder={'tuannguyensn2001a@gmail.com'}
                  label={'Email'}
                  type={'email'}
                  fullWidth
                  size={'small'}
                  {...register('email', {
                    required: 'Email không được để trống'
                  })}
                  helperText={!!errors.email && errors.email.message}
                />
              </div>
              <div className={'pt-6'}>
                <TextField
                  error={!!errors.password}
                  type={'password'}
                  placeholder={'123456'}
                  label={'Password'}
                  fullWidth
                  size={'small'}
                  helperText={!!errors.password && errors.password.message}
                  {...register('password', {
                    required: 'Mật khẩu không được để trống'
                  })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FormControlLabel
                  control={<Checkbox />}
                  label={'Remember me'}
                />
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button type={'submit'} variant={'contained'} fullWidth>
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageAuthLogin;
