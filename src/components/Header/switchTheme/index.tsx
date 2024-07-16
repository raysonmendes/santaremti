import React from "react";
import { IconButton, Typography, useTheme } from "@mui/material";
import useColorMode from "../../../hooks/useColorMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const SwitchTheme = () => {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <>
      <IconButton
        sx={{ ml: 2, backgroundColor: "transparent", gap: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "small",
            color: "#262626",
          }}
        >
          Thema
        </Typography>
        {theme.palette.mode === "dark" ? <LightModeIcon /> : <ModeNightIcon />}
      </IconButton>
    </>
  );
};

export default SwitchTheme;
