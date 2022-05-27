import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import styled from "styled-components";
import ObjUser from "../User";

const StyledHeader = styled.header`
  display: flex;
  position: absolute;
  width: 1920px;
  height: 60px;
  left: 0px;
  top: 0px;
  background: #fafafa;
  box-shadow: 0px 2px 10px rgba(34, 52, 89, 0.22);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <ObjUser />
    </StyledHeader>
  );
}

export default Header;
