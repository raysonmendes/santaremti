import React from "react";

import { Container } from "./styles";

function Wrapper({ children, style, center, row, column, padding }) {
  return (
    <Container
      center={center}
      style={style}
      row={row}
      column={column}
      padding={padding}
    >
      {children}
    </Container>
  );
}

export default Wrapper;
