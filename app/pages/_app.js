import {Head} from "next/head";
import Navbar from "../components/Navbar/Navbar";
import {AppWrapper} from "../components/context/AchievementContext";

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
