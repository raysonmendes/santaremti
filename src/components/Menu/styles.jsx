import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  position: absolute;
  width: 300px;
  left: 810px;
`;

export const Text = styled.h1`
  margin: 0 25px;
  color: #212121;
  font-style: normal;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  width: 70px;
  height: 25px;
  border-radius: 4px;
  border: medium;
  justify-items: center;
  display: grid;
  align-content: center;
  &:hover {
    font-weight: 900;
    cursor: pointer;
  }
  &:active {
  }
`;
