import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  //justify-content: center;
  //align-items: center;
  //padding: 16px 32px;
  gap: 10px;
  position: relative;
  width: 275px;
  align-self: center;
  margin: auto 33.25%;
`;

export const Text = styled.h1`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  width: 65px;
  margin: auto;
  text-align: center;
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  &:active {
  }
`;
