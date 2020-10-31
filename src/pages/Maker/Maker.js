import React from "react";

import {
    MakerContainer
} from './styles';
import Launching from "../../components/Lauching/Launching";
import FormCreate from "../../components/FormCreate/FormCreate";

export default function Maker(){
    return(
        <MakerContainer>
            <Launching></Launching>
            <FormCreate></FormCreate>
        </MakerContainer>
    );
}

/* Página de criação de cadastro ! Coloca o teu código aqui Jaburu ! */