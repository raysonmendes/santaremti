import styled from "styled-components";

export const Sct_Footer = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 60px;
  left: 0;
  //top: auto;
  background: #ffffff;
  border: 1px solid #d6d6d6;
  flex-direction: column;
  bottom: 0;
`;

export const Author = styled.div`
  display: none;
  flex-direction: row;
  height: 30px;
  margin: auto;
  position: relative;
  width: 80%;
`;

export const Text = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  margin: auto;
  margin-bottom: 5px;
  margin-top: 5px;
`;
