import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  position: absolute;
`;

export const Ball = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: 1px solid #00adef;
  position: absolute;
  background: ${(props) => props.filled};
  top: -10px;
  left: ${(props) => props.position};
`;

export const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background: #00adef;
`;
