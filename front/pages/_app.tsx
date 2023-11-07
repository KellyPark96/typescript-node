import { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import '../styles/global.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import { Provider } from 'react-redux';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Communication</title>
      </Head>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  );
};

export default App;
