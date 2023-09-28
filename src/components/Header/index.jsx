import React from "react";

import Logo from "../Header/logo";
import Menu from "./menu";
import { StyledHeader, Container } from "./styles";
import UserHeader from "./userHeadbar";
import { Box } from "@mui/material";

function Header() {
  return (
    <Box boxShadow={"0px 2px 10px 0px rgba(34, 52, 89, 0.22)"}>
      <StyledHeader>
        <Container>
          <Logo />
          <Menu />
          <UserHeader />
        </Container>
      </StyledHeader>
    </Box>
  );
}

export default Header;
