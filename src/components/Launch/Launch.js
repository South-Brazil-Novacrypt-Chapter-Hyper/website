import React from 'react'
import './Launch.css'
import foguete from '/./Users/joaoz/Desktop/pagina-cadastro-site/src/svg/foguete.svg'
import step from '/./Users/joaoz/Desktop/pagina-cadastro-site/src/svg/step.svg'

function Launch() {
    return (
        <div className="launch">
            <div className="launch__title">
                <img src={foguete} alt="Imagem Foguete" className="launch__titleImg"/>
                <div className="launch__titleText">
                    <h1>Lauching Pad</h1>
                    <p>The best launch platform for your ideas!</p>
                </div>
            </div>
            <img src={step} className="launch__stepImg" alt="Imagem Step"/>
        </div>
    )
}

export default Launch;
