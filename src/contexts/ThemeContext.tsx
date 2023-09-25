import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { blackInWhite, blackPink } from "../theme";
import Footer from "../components/footer";
import Header from "../components/Header";

interface InterfaceThemeContextData {
  themeName: "blackInWhite" | "blackPink";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as InterfaceThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState<"blackInWhite" | "blackPink">(
    "blackInWhite"
  );

  const toggleTheme = useCallback(() => {
    setThemeName((prevThemeName) =>
      prevThemeName === "blackInWhite" ? "blackPink" : "blackInWhite"
    );
  }, []);

  const theme = useMemo(() => {
    console.log(themeName);
    if (themeName === "blackInWhite") return blackInWhite;
    return blackPink;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100%"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          <Header />
          <Grid
            container
            sx={{
              height: "90vh",
              overflowY: "auto",
            }}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={8} alignItems={"center"}>
              {children}
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Footer />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
