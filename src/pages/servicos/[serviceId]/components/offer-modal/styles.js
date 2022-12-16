import styled from "styled-components";

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  width: 24.4rem;
  height: 3.4rem;

  background: #000000;
  box-shadow: 3px 4px 10px rgba(38, 38, 38, 0.25);
  border-radius: 0.8rem;
  border: none;

  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
