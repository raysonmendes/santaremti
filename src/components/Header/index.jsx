import React from "react";

import Logo from "../Header/logo";
import Menu from "./menu";
import { StyledHeader, Container } from "./styles";
import UserHeader from "./userHeadbar";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Menu />
        <UserHeader />
      </Container>
    </StyledHeader>
  );
}

export default Header;
