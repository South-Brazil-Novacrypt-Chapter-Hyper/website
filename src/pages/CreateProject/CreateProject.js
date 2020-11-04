import React, { useState } from "react";

import { MakerContainer } from "./styles";
import Launching from "../../components/Lauching/Launching";
import FormCreate from "../../components/FormCreate/FormCreate";
import api from "../../services/api";

export default function CreateProject() {
  const [status, setStatus] = useState("");

  async function handleAddProject(data) {
    const response = await api.post("/project", data);
    try {
      console.log(response);
      setStatus(response.status)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MakerContainer>
      <Launching />
      <FormCreate onSubmit={handleAddProject} status={status} />
    </MakerContainer>
  );
}

/* Página de criação de cadastro ! Coloca o teu código aqui Jaburu ! */
