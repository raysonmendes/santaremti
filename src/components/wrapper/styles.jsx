import styled from "styled-components";

export const Container = styled.div`
  font-size: 12px;
  font-family: "Manrope", sans-serif;
  display: ${(props) =>
    props.center || props.column || props.row ? "flex" : "inherit"};
  justify-content: ${(props) => (props.center ? "center" : "inherit")};
  flex-direction: ${(props) =>
    props.row ? "row" : props.column ? "column" : "inherit"};
  padding: ${(props) => props.padding && "8px"};
`;
