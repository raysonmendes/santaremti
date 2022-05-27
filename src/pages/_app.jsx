import Head from "next/head";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
