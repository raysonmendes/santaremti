import styled from "styled-components";

const paddingMap = {
  top: "0.8rem 0 0 0",
  right: "0 0.8rem 0 0",
  bottom: "0 0 0.8rem 0",
  left: "0 0 0 0.8rem",
};

export const Container = styled.div`
  font-size: 1.6rem;
  font-family: "Manrope", sans-serif;
  display: ${(props) =>
    props.center || props.column || props.row ? "flex" : "inherit"};
  justify-content: ${(props) => (props.center ? "center" : "inherit")};
  flex-direction: ${(props) =>
    props.row ? "row" : props.column ? "column" : "inherit"};
  padding: ${(props) =>
    props.padding && paddingMap[props.padding]
      ? paddingMap[props.padding]
      : props.padding === true
      ? "0.8rem"
      : props.padding
      ? props.padding
      : "None"};
  gap: ${(props) => props.gap && props.gap};
`;
