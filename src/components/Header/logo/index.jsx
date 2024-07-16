import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { StyledLogo, Text } from "./styles";

const Logo = () => (
  <Link href={"/"}>
    <StyledLogo>
      <Image
        src="https://res.cloudinary.com/rayson/image/upload/v1655049181/Santarem%20TI/FaveIcon/favicon.ico"
        width="40px"
        height="40px"
        objectFit={"cover"}
        layout="fixed"
      />

      <Text>Santarém TI</Text>
    </StyledLogo>
  </Link>
);

export default Logo;
