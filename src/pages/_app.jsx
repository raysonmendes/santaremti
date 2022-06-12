import Footer from "../components/footer";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { ContainerBody } from "../styles/stl_Body";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <ContainerBody>
        <Component {...pageProps} />
      </ContainerBody>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
