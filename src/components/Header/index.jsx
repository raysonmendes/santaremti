import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import { StyledHeader } from "./styles";
// import ObjUser from "../User";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
}

export default Header;
