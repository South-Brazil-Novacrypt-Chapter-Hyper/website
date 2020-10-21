import React from "react";

import Header from "../../components/Header/Header";
import TimeLine from "../../components/TimeLine/index";

import { Container } from "./styles";

import Rocket from '../../global/assets/images/rocket.svg'

export default function LaunchingPad() {
  return (
    <Container>
      <Header title="PROJECT LAUNCHING PAD" />
      <main>
        <img src={Rocket} alt=""/>
        <section>
          <h1>PROJECT LAUNCHING PAD</h1>
          <h4>The best launch platform for your ideas!</h4>
        </section>
      </main>
      <div style={{display: "flex", justifyContent: "center"}}>
        <TimeLine/>
      </div>
    </Container>
  );
}
