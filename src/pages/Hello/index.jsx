import React, { useEffect, useState } from "react";

import Header from "../../components/Header/Header";

import { Container } from "./styles";

export default function Hello() {
  const [userName, setUserName] = useState();

  async function handleLogIn() {
    const response = await fetch("http://localhost:4000/user", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });

    const res = await response.json();
    console.log(res);
    setUserName(res.user.displayName);
  }

  useEffect(() => {
    handleLogIn();
  }, []);

  return (
    <Container>
      <Header title="PROJECT LAUNCHING PAD" userName={userName} />
      <h1 style={{ color: "#fff" }}>Hello {userName}</h1>
    </Container>
  );
}
