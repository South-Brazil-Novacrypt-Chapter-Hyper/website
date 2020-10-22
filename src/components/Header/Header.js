import React from "react";

import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";

import logo from "../../global/assets/icons/logo.svg";
import home from "../../global/assets/icons/home.svg";
import about from "../../global/assets/icons/sobre.svg";
import contact from "../../global/assets/icons/contato.svg";

export default function Header({ title, userName }) {
  function loginWithGitHub(ev) {
    ev.preventDefault();
    window.open("http://localhost:4000/auth/github", "_self");
  }

  async function logOut(ev) {
    ev.preventDefault();
    fetch("http://localhost:4000/logout");
  }

  return (
    <HeaderContainer>
      <div id="title">
        <img src={logo} alt=""></img>
        <span>{title}</span>
      </div>
      <div>
        <Link to="#">
          <img src={home} style={{ width: 23 }} alt=""></img>
          Início
        </Link>

        {userName ? (
          <button onClick={logOut}>
            <img src={home} style={{ width: 23 }} alt=""></img>
            Log Out
          </button>
        ) : (
          <button onClick={loginWithGitHub}>
            <img src={home} style={{ width: 23 }} alt=""></img>
            Login in GitHub
          </button>
        )}

        <Link to="#">
          <img src={contact} alt=""></img>
          Contato
        </Link>
        <Link to="#">
          <img src={about} alt=""></img>
          Sobre
        </Link>
      </div>
    </HeaderContainer>
  );
}
