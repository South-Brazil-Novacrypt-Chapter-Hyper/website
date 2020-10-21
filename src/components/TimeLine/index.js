import React from "react";

import { Container, Ball, Line } from "./styles";

export default function TimeLine() {
  return (
    <Container>
      <Line />
      <Ball filled="#000" size="20px" positionLeft="0%"  positionTop="-10px" />
      <Ball filled="#000" size="20px" positionLeft="25%" positionTop="-10px"/>
      <Ball filled="#000" size="40px" positionLeft="50%" positionTop="-20px"/>
      <Ball filled="#000" size="20px" positionLeft="75%" positionTop="-10px"/>
      <Ball filled="#000" size="20px" positionLeft="100%" positionTop="-10px" />
    </Container>
  );
}
