import React, { useState } from "react";

import { MakerContainer } from "./styles";
import Launching from "../../components/Lauching/Launching";
import FormCreate from "../../components/FormCreate/FormCreate";
import api from "../../services/api";

export default function CreateProject() {
  const [status, setStatus] = useState("");

  async function handleAddProject(data) {
    console.log("CALL: Handle Add Project");
    const response = await api.post("/project", data);
    setStatus(response.status);
    if (status === 200) {
      console.log("Project Created", status);
    }
  }

  return (
    <MakerContainer>
      <Launching />
      <FormCreate onSubmit={handleAddProject} />
    </MakerContainer>
  );
}

/* Página de criação de cadastro ! Coloca o teu código aqui Jaburu ! */
