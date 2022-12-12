import React from "react";
import Menu from "./Menu/index";
import Logo from "./Logo/index";
import { StyledHeader, Container } from "./styles";
import UserHeader from "./userHeadbar";
// import ObjUser from "../User";

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
