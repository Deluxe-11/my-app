import Head from 'next/head';
import RegisterPage from '@src/features/auth/pages/register';

function Register() {
  return (
    <>
      <Head>
        <title>Đăng ký người dùng</title>
      </Head>
      <RegisterPage />
    </>
  );
}

export default Register;
