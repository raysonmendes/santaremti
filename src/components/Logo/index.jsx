import styled from "styled-components";

const StyledLogo = styled.section`
  position: absolute;
  width: 220px;
  left: 20px;
  top: 25%;
`;
const Text = styled.h1`
  display: flex;
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  color: #223459;
`;

const Logo = () => (
  <StyledLogo>
    <Text>Santarém T.I.</Text>
  </StyledLogo>
);

export default Logo;
