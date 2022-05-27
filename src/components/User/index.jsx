/* Imports */
import styled from "styled-components";

/* Styled */
const UserStyled = styled.div`
  display: flex;
  width: auto;
  height: 35px;
  right: 34px;
  top: 12.5px;
`;
const UserImage = styled.img`
  background-size: 50px 50px;
  border: 0;
  border-radius: 50%;
  display: block;
  margin: 0;
  position: relative;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
const UserName = styled.text`
  position: absolute;
  width: auto;
  height: 20px;
  font-size: 16px;
`;
const Button = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
`;

// export main
function Usuario() {
  <UserStyled>
    <UserName>Rayson</UserName>
  </UserStyled>;
}

export default Usuario;
