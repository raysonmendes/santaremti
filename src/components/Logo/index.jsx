import styled from "styled-components";

const StyledLogo = styled.section`
  position: relative;
  width: 155px;
  margin: 15px;
  align-content: center;
`;
const Text = styled.h1`
  font-family: "Manrope", sans-serif;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #212121;
`;

const Logo = () => (
  <StyledLogo>
    <Text>Santarém T.I.</Text>
  </StyledLogo>
);

export default Logo;
