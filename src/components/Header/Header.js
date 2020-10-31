import React from 'react';

import {
    HeaderContainer
} from './styles';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../global/assets/icons/logo.svg';
import home from '../../global/assets/icons/home.svg';
import about from '../../global/assets/icons/sobre.svg';
import contact from '../../global/assets/icons/contato.svg';
import project from '../../global/assets/icons/projetos.svg';



export default function Header() {
    const location = useLocation();

    const menu = [
        {
            path: '/',
            url: home,
            title: 'Home'
        },
        {
            path: '/projects',
            url: project,
            title: 'Projetos'
        },
        {
            path: '/contact',
            url: contact,
            title: 'Contato'
        },
        {
            path: '/about',
            url: about,
            title: 'Sobre'
        },

    ]
    return (
        <HeaderContainer>
            <div>
                <Link to='/'>
                    <img src={logo}></img>
                </Link>
            </div>
            <div>
                {
                    menu.map(item => (
                        (location.pathname == item.path)
                            ?
                            <Link to={item.path} style={{background: '#00ADEFM'}} >
                                <img src={item.url}></img>
                                {item.title}
                            </Link>
                            :
                            <Link to={item.path}>
                                <img src={item.url}></img>
                                {item.title}
                            </Link>
                    ))
                }
            </div>
        </HeaderContainer >
    );
}