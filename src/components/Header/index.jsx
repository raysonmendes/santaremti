import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import { StyledHeader } from "./styles";
import UserHeader from "../userHeadbar";
// import ObjUser from "../User";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <UserHeader />
    </StyledHeader>
  );
}

export default Header;
