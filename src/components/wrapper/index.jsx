import React from "react";

import { Container } from "./styles";

function Wrapper({ children, style }) {
  return <Container style={style}>{children}</Container>;
}

export default Wrapper;
