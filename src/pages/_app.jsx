import Head from "next/head";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Plataforma para conectar profissional com clinetes de TI"
        />
        <meta name="author" content="Rayson - Mendes" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Santarém TI</title>
      </Head>
      <Header />
      <div>sidebar</div>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
