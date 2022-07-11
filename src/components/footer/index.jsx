import {
  Sct_Footer,
  Author,
  Text,
  Button,
  Sct_Author,
  Sct_Help,
} from "../footer/style";
import Image from "next/image";
import React, { useState } from "react";
const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTeste, setTeste] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
    console.log("isActive", isActive);
  };
  const handleTeste = () => {
    setTeste(!isTeste);
    console.log("isTeste", isTeste);
  };
  return (
    <Sct_Footer>
      <Sct_Author isActive={isActive} onSetIsActive={handleIsActive}>
        <Button onClick={onSetIsActive()} />

        <Author>
          <Text>Developer Rayson Nascimento Mendes.</Text>
          <Text>Designer Maxine de Aguiar Fernades</Text>
          <Text>Collaborator Marcos Paulo Amorim</Text>
        </Author>
      </Sct_Author>
      <Text>COPYRIGHT © Todos os direitos reservados. 2022.</Text>
      <Sct_Help>
        <Image
          src={
            "https://res.cloudinary.com/rayson/image/upload/v1657155681/Santarem%20TI/Footer/Help_ngdafx.png"
          }
          width={48}
          height={48}
          objectFit={"cover"}
          layout="fixed"
        />
      </Sct_Help>
    </Sct_Footer>
  );
};
export default Footer;
