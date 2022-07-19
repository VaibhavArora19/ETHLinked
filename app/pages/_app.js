import {Head} from "next/head";
import Navbar from "../components/Navbar/Navbar";
import {AppWrapper} from "../components/context/Achievement-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
    <Navbar />
    <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
