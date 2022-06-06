import Link from "next/link";
import { useRouter } from "next/router";
import { StyledMenu, Text } from "./styles";
const linkStyle = {
  marginRight: 15,
};

const Menu = () => (
  <StyledMenu>
    <Link href="/">
      <Text>Home</Text>
    </Link>
    <Link href="/servicos">
      <Text>Serviços</Text>
    </Link>
    <Link href="/sobre">
      <Text>Sobre</Text>
    </Link>
  </StyledMenu>
);

export default Menu;
