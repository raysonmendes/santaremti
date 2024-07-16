import { Sct_Footer, Text, Container } from "../footer/style";

import { useState } from "react";
const Footer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <Sct_Footer>
        <Text>COPYRIGHT © Todos os direitos reservados. 2022.</Text>
      </Sct_Footer>
    </Container>
  );
};
export default Footer;
