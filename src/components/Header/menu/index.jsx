import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Link from "next/link";
import CustomizedLink from "../../customizedLink";
import { StyledMenu } from "./styles";
import { Typography } from "@mui/material";

const linkStyle = {
  marginRight: 15,
};

const Menu = () => {
  const currentRouter = useRouter();
  const focusLink = useRef();

  useEffect(() => {
    try {
      console.log("focusLink aqui: ", focusLink.current.children);
      // console.log("currentRouter: ", currentRouter.pathname);

      for (let index = 0; index < focusLink.current.children.length; index++) {
        const element = focusLink.current.children[index];

        if (currentRouter.pathname === element.attributes.href.value) {
          element.children[0].style = "font-weight: 700";

          console.log("A pagina atual é: ", element.children);
        } else {
          element.children[0].style = "font-weight: 400";
        }
        // console.log("elemente aqui: ", element.children.attributes);
      }
    } catch (error) {
      return "erro ao midificar estilo do menu ativo";
    }
  }, [currentRouter.pathname]);

  return (
    <StyledMenu ref={focusLink}>
      <CustomizedLink link={"/"} noneStyle>
        <Typography
          variant="body1"
          fontFamily={"Montserrat"}
          fontSize={16}
          fontStyle={"normal"}
          lineHeight={"normal"}
        >
          Home
        </Typography>
      </CustomizedLink>

      <CustomizedLink link={"servicos"} noneStyle>
        <Typography
          variant="body1"
          fontFamily={"Montserrat"}
          fontSize={16}
          fontStyle={"normal"}
          lineHeight={"normal"}
        >
          Serviços
        </Typography>
      </CustomizedLink>

      <CustomizedLink link={"/sobre"} noneStyle>
        <Typography
          variant="body1"
          fontFamily={"Montserrat"}
          fontSize={16}
          fontStyle={"normal"}
          lineHeight={"normal"}
        >
          Sobre
        </Typography>
      </CustomizedLink>
    </StyledMenu>
  );
};

export default Menu;
