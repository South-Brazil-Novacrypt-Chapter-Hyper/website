import React from "react";

import { Link } from "react-router-dom";

import { MainContainer } from "./styles";

import Header from "../../components/Header/Header";

import manager from "../../global/assets/images/manager.gif";
import projetos from "../../global/assets/icons/projetos.svg";
import blog from "../../global/assets/icons/blog.svg";
import team from "../../global/assets/icons/team.svg";

export default function Main() {
  return (
    <>
      <Header title="NovaCrypt South Brazil - HYPER" />
      <MainContainer>
        <section>
          <img src={manager} alt=""></img>
          <h1>
            Welcome to NovaCrypt
            <br /> South Brazil
          </h1>
        </section>
        <article>
          <h2>What is Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </article>
        <main>
          <Link to="/projects">
            <img src={projetos} alt=""></img>
            Projetos
          </Link>
          <Link to="#">
            <img src={team} alt=""></img>
            Times
          </Link>
          <Link to="#">
            <img src={blog} alt=""></img>
            Blog
          </Link>
        </main>
      </MainContainer>
    </>
  );
}
