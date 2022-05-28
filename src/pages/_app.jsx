import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
