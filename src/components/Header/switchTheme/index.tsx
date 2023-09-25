import React from "react";
import { Button } from "@mui/material";
import { useAppThemeContext } from "../../../contexts/ThemeContext";

const SwitchTheme = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Button variant="text" onClick={toggleTheme}>
      Mudar Tema
    </Button>
  );
};

export default SwitchTheme;
