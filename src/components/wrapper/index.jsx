import React from "react";

import { Container } from "./styles";

function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

export default Wrapper;
