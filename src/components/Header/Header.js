import React from 'react'
import './Header.css'
import logo from '/./Users/joaoz/Desktop/pagina-cadastro-site/src/svg/logo.svg'
import inicio from '/./Users/joaoz/Desktop/pagina-cadastro-site/src/svg/inicio.svg'
import contato from '/./Users/joaoz/Desktop/pagina-cadastro-site/src/svg/contato.svg'
import sobre from '/./Users/joaoz/Desktop/pagina-cadastro-site/src/svg/sobre.svg'

function Header() {
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt="Logo"/>
            <div className="header__nav">
                <div className="header__navWrap">
                    <img src={inicio} alt="Imagem Início"/>
                    <span>Início</span>
                </div>
                <div className="header__navWrap">
                    <img src={contato} alt="Imagem Contato"/>
                    <span>Contato</span>
                </div>
                <div className="header__navWrap">
                    <img src={sobre} alt="Imagem Sobre"/>
                    <span>Sobre</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
