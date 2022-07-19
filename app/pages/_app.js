import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import {AppWrapper} from "../components/context/Achievement-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
    rel="stylesheet"
    />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
