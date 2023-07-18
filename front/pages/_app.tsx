import 'antd/dist/reset.css';
import {AppProps} from "next/app";
import Head from "next/head";
import wrapper from "../store/configureStore";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>node</title>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default wrapper.withRedux(App);