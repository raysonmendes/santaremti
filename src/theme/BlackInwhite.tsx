import React from "react";
import { createTheme } from "@mui/material";

const theme = createTheme();
export const blackInWhite = createTheme({
  palette: {
    primary: {
      light: "#4D4D4D",
      main: "#000000",
      dark: "#FFFFFF",
      contrastText: "#fff",
    },
    secondary: {
      light: "#40F56D",
      main: " #2BA84A;",
      dark: "#1E7534",
      contrastText: "#89F5A4",
    },
    background: { default: "#FAFAFA", paper: "#a6a6a6" },
  },
  typography: {
    body1: {
      color: "#000000",
      fontFamily: '"Manrope", sans-serif',
      fontSize: 16,
      fontWeight: 400,
    },
    h2: {
      color: "#000000",
      fontFamily: '"Barlow", sans-serif',
      fontSize: 28,
      fontWeight: 600,
    },
    button: {
      color: "#000000",
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
