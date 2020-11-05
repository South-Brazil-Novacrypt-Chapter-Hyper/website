import React, { useState } from "react";

import {
    MakerContainer,
    LauchingContainer,
    FormCreateContainer
} from './styles';

import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

import createsubmit from '../../global/assets/icons/createsubmit.svg'
import rocket from '../../global/assets/icons/rocket.svg';
import stepone from '../../global/assets/icons/stepone.svg';

const GreenCheckbox = withStyles({
    root: {
        color: cyan[400],
        '&$checked': {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


export default function Maker() {
    const [step, onStep] = useState(1);
    const [web, onWeb] = useState(false);
    const [mobile, onMobile] = useState(false);
    const [desktop, onDesktop] = useState(false);


    if (step == 1) {
        return (
            <MakerContainer>
                <LauchingContainer>
                    <div>
                        <img src={rocket} alt="Foguete" />
                        <div>
                            <h1>Lauching Pad</h1>
                            <p>The best launch platform for your ideas!</p>
                        </div>
                    </div>
                    <img src={stepone} className="launch__stepImg" alt="Imagem Step" />
                </LauchingContainer>
                <FormCreateContainer>
                    <div>
                        <div>
                            <span>Project Name</span>
                            <input type="text" />
                        </div>
                        <section>
                            <span>Platform</span>
                            <div>
                                <div>
                                    <GreenCheckbox checked={web} onChange={(e) => {
                                        if (web == true) {
                                            onWeb(false)
                                        } else {
                                            onWeb(true);
                                        }
                                    }} color="primary" />
                                    <label>Web</label>
                                </div>
                                <div>
                                    <GreenCheckbox checked={mobile} onChange={(e) => {
                                        if (mobile == true) {
                                            onMobile(false)
                                        } else {
                                            onMobile(true);
                                        }
                                    }} color="primary" />                                    
                                    <label>Mobile</label>
                                </div>
                                <div>
                                    <GreenCheckbox checked={desktop} onChange={(e) => {
                                        if (desktop == true) {
                                            onDesktop(false)
                                        } else {
                                            onDesktop(true);
                                        }
                                    }} color="primary" />
                                    <label>Desktop</label>
                                </div>
                            </div>
                        </section>
                        <div>
                            <span>Description</span>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div>
                        <p>Scope</p>
                        <footer>
                            <span></span>
                            <div>
                                <img src={createsubmit}></img>
                            </div>
                        </footer>
                    </div>
                </FormCreateContainer>
            </MakerContainer>
        );
    }
}

/* Página de criação de cadastro ! Coloca o teu código aqui Jaburu ! */