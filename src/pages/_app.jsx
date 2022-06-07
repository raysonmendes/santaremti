import Footer from "../components/footer";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { Body } from "../styles/stl_Body";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Body>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </Body>
  );
};

export default MyApp;
