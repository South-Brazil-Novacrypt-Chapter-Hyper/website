import React from "react";

import { Container, Ball, Line } from "./styles";

export default function TimeLine() {
  return (
    <Container>
      <Line />
      <Ball filled="#000" position="0%" size="20px" />
      <Ball filled="#000" position="25%" size="20px" />
      <Ball filled="#000" position="50%" size="40px" />
      <Ball filled="#000" position="75%"  size="20px"/>
      <Ball filled="#000" position="100%" size="20px" />
    </Container>
  );
}
