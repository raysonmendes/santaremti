import { useState } from "react";
import { Typography } from "@mui/material";
import { Sct_Footer, Text, Container } from "../footer/style";

const Footer = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleIsActive = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <Container>
      <Sct_Footer>
        <Typography
          variant="caption"
          fontFamily={"Montserrat"}
          fontSize={12}
          fontStyle={"normal"}
          lineHeight={"normal"}
        >
          COPYRIGHT © Todos os direitos reservados. 2022.
        </Typography>
      </Sct_Footer>
    </Container>
  );
};
export default Footer;
