import {
  Sct_Footer,
  Author,
  Text,
  Button,
  Sct_Author,
  Sct_Help,
} from "../footer/style";
import Image from "next/image";
import { useState } from "react";
const Footer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
    console.log("isActive", isActive);
  };

  return (
    <Sct_Footer>
      <Sct_Author isActive={isActive}>
        <Author isActive={isActive}>
          <Text>
            <strong>Developer</strong> Rayson Nascimento Mendes.
          </Text>
          <Text>
            <strong>Designer</strong> Maxine de Aguiar Fernandes
          </Text>
          <Text>
            <strong>Collaborator</strong> Marcos Paulo Amorim
          </Text>
        </Author>
        <Button isActive={isActive} onClick={handleIsActive} />
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
