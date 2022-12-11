import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
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
