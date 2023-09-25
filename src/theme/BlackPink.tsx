import { createTheme } from "@mui/material";

export const blackPink = createTheme({
  palette: {
    primary: {
      light: "#F5A6B9",
      main: "#F5A6B9",
      contrastText: "#fff",
    },
    background: { default: "#000000", paper: "#F5A6B9" },
  },
  typography: {
    body1: {
      fontFamily: "Monrope",
      fontSize: 16,
      color: "#F5A6B9",
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
