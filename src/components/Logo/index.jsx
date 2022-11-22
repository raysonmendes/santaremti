import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Container, StyledLogo, Text } from "../logo/styles";

const Logo = () => (
  //<Container>
  <StyledLogo>
    <Image
      src="https://res.cloudinary.com/rayson/image/upload/v1655049181/Santarem%20TI/FaveIcon/favicon.ico"
      width="40px"
      height="40px"
      objectFit={"cover"}
      layout="fixed"
    />
    <Link href={"/"}>
      <Text>Santarém TI</Text>
    </Link>
  </StyledLogo>
  //</Container>
);

export default Logo;
