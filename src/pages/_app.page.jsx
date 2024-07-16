import Footer from "../components/footer";
import Header from "../components/Header";
import { ColorModeProvider } from "../contexts/colorModeContext";
import { GlobalStyle } from "../styles/global";
import { ContainerBody } from "../styles/stl_Body";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <ColorModeProvider>
        <>
          <Header />
          <ContainerBody>
            <Component {...pageProps} />
          </ContainerBody>
          <Footer />
          <GlobalStyle />
          <ToastContainer />
        </>
      </ColorModeProvider>
    </SessionProvider>
  );
};

export default MyApp;
