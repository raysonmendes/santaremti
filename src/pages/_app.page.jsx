import Footer from "../components/footer";
import Header from "../components/Header";
import { AppThemeProvider, ColorModeProvider } from "../contexts/ThemeContext";
import { GlobalStyle } from "../styles/global";
import { ContainerBody } from "../styles/stl_Body";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <AppThemeProvider>
        <>
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer />
        </>
      </AppThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
