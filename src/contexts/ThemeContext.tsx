import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { Box, Container, ThemeProvider } from "@mui/material";
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
          <Box width={"100%"} overflow={"auto"}>
            <Container>
              <Box
                display={"flex"}
                flexDirection={"column"}
                height={"90vh"}
                pt={14}
              >
                {children}
              </Box>
            </Container>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
