import React from "react";
import { createTheme } from "@mui/material";

export const blackInWhite = createTheme({
  palette: {
    primary: {
      light: "#000000",
      main: "#000000",
      dark: "#FFFFFF",
      contrastText: "#fff",
    },
    background: { default: "#FAFAFA", paper: "#FAFAFA" },
  },
  typography: {
    body1: {
      fontFamily: "Monrope",
      fontSize: 16,
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
