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

export const Sct_Author = styled.div`
  display: flex;
  transition-property: flex-direction 0.5;
  flex-direction: ${(props) =>
    props.isActive === true ? "row-reverse" : "row"};
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: border-width 0.25s, border-color 0.25s;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(props) =>
    props.isActive === true ? "7px 14px 7px 0;" : "7px 0 7px 14px;"};
  border-color: ${(props) =>
    props.isActive === true
      ? "#ffffff #000000 #ffffff #ffffff;"
      : "#ffffff #ffffff #ffffff #000000;"};
  width: 0;
  height: 0;
  border-style: solid;
`;

export const Author = styled.div`
  display: ${(props) => (props.isActive === true ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  transition: display 0.25s;
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
