import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
const linkStyle = {
  marginRight: 15,
};

const StyledMenu = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  position: absolute;
  width: 300px;
  left: 810px;
`;

const Text = styled.text`
  margin: 0 25px;
  color: #223459;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  width: 70px;
  height: 25px;
  border-radius: 4px;
  border: medium;
  justify-items: center;
  display: grid;
  align-content: center;
  &:hover {
    color: #3ca6a6;
    cursor: pointer;
    border: 2px solid #3ca6a6;
  }
  &:active {
    color: #3ca6a6;
  }
`;

const Menu = () => (
  <StyledMenu>
    <Link href="/">
      <Text>Home</Text>
    </Link>
    <Link href="/servicos">
      <Text>Serviços</Text>
    </Link>
  </StyledMenu>
);

export default Menu;
