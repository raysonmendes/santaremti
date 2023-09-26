import React from "react";
import { createTheme } from "@mui/material";

const theme = createTheme();
export const blackInWhite = createTheme({
  palette: {
    primary: {
      light: "#4D4D4D",
      main: "#000000",
      dark: "#FFFFFF",
      contrastText: "#999999",
    },
    secondary: {
      light: "#40F56D",
      main: " #2BA84A;",
      dark: "#1E7534",
      contrastText: "#89F5A4",
    },
    background: { default: "#FAFAFA", paper: "#FAFAFA" },
  },
  typography: {
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
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: { ":hover": { background: "none" } },
      },
    },
  },
});
