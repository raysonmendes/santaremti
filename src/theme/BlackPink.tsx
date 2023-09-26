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
    text: { primary: "#F5A6B9", secondary: "#F8567B" },
  },
  typography: {
    allVariants: {
      WebkitTextFillColor: "#F5A6B9",
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: 16,
      fontWeight: 400,
      color: "theme.palette.primary",
    },
    h2: {
      fontFamily: '"Barlow", sans-serif',
      fontSize: 28,
      fontWeight: 600,
    },
  },
});
