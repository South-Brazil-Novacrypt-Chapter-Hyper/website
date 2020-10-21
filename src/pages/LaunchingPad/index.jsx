import React from "react";

import Header from "../../components/Header/Header";
import TimeLine from "../../components/TimeLine/index";

import { Container } from "./styles";

import Rocket from "../../global/assets/images/rocket.svg";

export default function LaunchingPad() {
  async function handleSubmit(e) {
    e.preventDefaul();
  }

  return (
    <Container>
      <Header title="PROJECT LAUNCHING PAD" />
      <main>
        <img src={Rocket} alt="" />
        <section>
          <h1>PROJECT LAUNCHING PAD</h1>
          <h4>The best launch platform for your ideas!</h4>
        </section>
      </main>
      <div className="timeline">
        <TimeLine />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <fieldset>
          <label htmlFor="project_name">Project name:</label>
          <input id="project_name" />
        </fieldset>
        <fieldset id="platform">
          <span>Platform:</span>
          <div id="checkbox_div">
            <input type="checkbox" id="web" />
            <label htmlFor="web">Web</label>
          </div>
          <div id="checkbox_div">
            <input type="checkbox" id="mobile" />
            <label htmlFor="mobile">Mobile</label>
          </div>
          <div id="checkbox_div">
            <input type="checkbox" id="desktop" />
            <label htmlFor="desktop">Desktop</label>
          </div>
        </fieldset>
        <fieldset id="description">
          <label htmlFor="description_text">Description: </label>
          <div id="description_text" contentEditable></div>
        </fieldset>
      </form>
    </Container>
  );
}
