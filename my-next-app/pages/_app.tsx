import type { AppProps } from 'next/app';
import '../src/styles/root.scss';
import { Provider } from 'react-redux';
import { store } from '@src/apps/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'tailwindcss/tailwind.css';
import Bootstrap from '@src/Bootstrap';
import { AppProvider } from '@src/context/useAppContext';
import { io } from 'socket.io-client';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppProvider
            value={{
              socket: io('http://localhost:3333')
            }}
          >
            <Bootstrap />
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
