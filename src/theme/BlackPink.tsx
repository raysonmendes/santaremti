import { createTheme } from "@mui/material";

export const blackPink = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#F75E81",
      main: "#F5A6B9",
      dark: "#C28492",
      contrastText: "#752D3E",
    },
    secondary: {
      light: "#782A3C",
      main: "#F8567B",
      dark: "#F9A2B6",
      contrastText: "#C44563",
    },
    background: { default: "#000000", paper: "#752D3E" },
  },
  typography: {
    body1: {
      color: "#F5A6B9",
      fontFamily: '"Manrope", sans-serif',
      fontSize: 16,
      fontWeight: 400,
    },
    h2: {
      color: "#F5A6B9",
      fontFamily: '"Barlow", sans-serif',
      fontSize: 28,
      fontWeight: 600,
    },
    button: {
      color: "#F5A6B9",
      fontFamily: '"Montserrat", sans-serif',
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: { ":hover": { background: "none" } },
      },
    },
  },
});
