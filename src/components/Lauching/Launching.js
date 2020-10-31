import React from 'react'

import {
    LauchingContainer
} from './styles';

import rocket from '../../global/assets/icons/rocket.svg';
import step from '../../global/assets/icons/stepone.svg';

export default function Launching() {
    return (
        <LauchingContainer>
            <div>
                <img src={rocket} alt="Foguete"/>
                <div>
                    <h1>Lauching Pad</h1>
                    <p>The best launch platform for your ideas!</p>
                </div>
            </div>
            <img src={step} className="launch__stepImg" alt="Imagem Step"/>
        </LauchingContainer>
    )
}
