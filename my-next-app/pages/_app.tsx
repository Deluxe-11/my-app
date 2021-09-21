import type { AppProps } from 'next/app';
import '../src/styles/root.scss';
import Notification from '@src/components/Notifcation';
import { Provider } from 'react-redux';
import { store } from '@src/apps/store';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Notification />
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
