import Layout from '@src/features/auth/components/Layout';
import { useForm } from 'react-hook-form';
import { Alert, Button, TextField } from '@mui/material';
import React from 'react';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from '@src/types/Response';
import { fetchRegister } from '@src/features/auth/services';
import useNotification from '@src/hooks/useNotification';
import { useRouter } from 'next/router';

interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>();

  const fire = useNotification('snackbar');

  const history = useRouter();

  const registerAccount = useMutation<
    AxiosResponse<Response>,
    AxiosError<Response>,
    RegisterForm
  >(
    'register',
    (data) =>
      fetchRegister({
        email: data.email,
        password: data.password,
        name: data.name
      }),
    {
      onSuccess(response) {
        history.push('/login').then((r) => {
          fire.success(response.data.message);
        });
      }
    }
  );

  const submit = (data: RegisterForm) => {
    registerAccount.mutate(data);
  };

  return (
    <Layout>
      <div>
        {registerAccount.isError && (
          <Alert variant="filled" severity="error">
            {registerAccount.error?.response?.data.message}
          </Alert>
        )}
      </div>
      <form
        className={'mt-8 space-y-6'}
        onSubmit={handleSubmit(submit)}
        action=""
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <TextField
              error={!!errors.email}
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

          <div className="pt-6">
            <TextField
              {...register('name')}
              error={!!errors.name}
              label={'Tên người dùng'}
              fullWidth
              size={'small'}
              helperText={!!errors.name && errors.name.message}
            />
          </div>

          <div className={'pt-6'}>
            <TextField
              error={!!errors.password}
              type={'password'}
              label={'Mật khẩu'}
              fullWidth
              size={'small'}
              helperText={!!errors.password && errors.password.message}
              {...register('password', {
                required: 'Mật khẩu không được để trống'
              })}
            />
            <div className="pt-6">
              <TextField
                error={!!errors.confirmPassword}
                type={'password'}
                label={'Nhập lại mật khẩu'}
                fullWidth
                size={'small'}
                helperText={
                  !!errors.confirmPassword && errors.confirmPassword.message
                }
                {...register('password')}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button type={'submit'} fullWidth variant={'contained'}>
            Đăng ký
          </Button>
        </div>
      </form>
    </Layout>
  );
}

export default RegisterPage;
