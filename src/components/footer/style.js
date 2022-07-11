import styled from "styled-components";

export const Sct_Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 48px;
  left: 0;
  background: #ffffff;
  border: 1px solid #d6d6d6;
  bottom: 0;
`;

export const SctAuthor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 224px;
  gap: 1rem;
  transition: 0.3s;

  flex-direction: ${(props) => props.isActive && "row-reverse"};
  animation: ${(props) => props.isActive && "both"};
  animation-duration: ${(props) => props.isActive && "0.5s"};
  /* :active {
    flex-direction: row-reverse;
    animation: both;
    animation-duration: 0.5s;
  } */
`;

export const Button = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(props) =>
    props.isActive ? "7px 14px 7px 0" : "7px 0 7px 14px"};
  border-color: #ffffff #ffffff #ffffff #000000;
  transition: 0.3s;
  /* :active {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ;
    border-color: #ffffff #ff0000 #ffffff #ffffff;
  } */
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

export const Sct_Help = styled.div`
  display: flex;
  cursor: pointer;
  :hover {
  }
`;
