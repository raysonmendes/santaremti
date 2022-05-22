import Link from "next/link";
import { useRouter } from "next/router";

const linkStyle = {
  marginRight: 15,
};

const Menu = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/sobre">
      <a style={linkStyle}>Sobre</a>
    </Link>
    <Link href="/servicos">
      <a style={linkStyle}>Serviços</a>
    </Link>
  </div>
);

export default Menu;
