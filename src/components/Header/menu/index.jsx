import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { StyledMenu, Text } from "./styles";

const linkStyle = {
  marginRight: 15,
};

const Menu = () => {
  const currentRouter = useRouter();
  const focusLink = useRef();

  useEffect(() => {
    try {
      // console.log("focusLink aqui: ", focusLink.current.children);
      // console.log("currentRouter: ", currentRouter.pathname);

      for (let index = 0; index < focusLink.current.children.length; index++) {
        const element = focusLink.current.children[index];

        if (currentRouter.pathname === element.attributes.href.value) {
          element.style = "font-weight: 700";

          // console.log("A pagina atual é: ", element.attributes.href.value);
        } else {
          element.style = "font-weight: 400";
        }
      }
    } catch (error) {
      return "erro ao midificar estilo do menu ativo";
    }
  }, [currentRouter.pathname]);

  return (
    <StyledMenu ref={focusLink}>
      <Link href="/" passHref>
        <Text>Home</Text>
      </Link>
      <Link href="/servicos" passHref>
        <Text>Serviços</Text>
      </Link>
      <Link href="/sobre" passHref>
        <Text>Sobre</Text>
      </Link>
    </StyledMenu>
  );
};

export default Menu;
