import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 238.59px;
  //align-self: center;
  justify-self: center;
`;

export const Text = styled.h1`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.08rem;
  color: #040f0f;
  padding: 8.68px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
