import styled from "styled-components";
import Image from "next/image";

const StyledLogo = styled.section`
  //position: relative;
  //width: 155px;
  //margin: 15px;
  margin-left: 4.07%;
  //margin-top: 1%;
  //align-content: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h1`
  font-family: "Manrope", sans-serif;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.57rem;
  color: #212121;
`;

const Logo = () => (
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
);

export default Logo;
