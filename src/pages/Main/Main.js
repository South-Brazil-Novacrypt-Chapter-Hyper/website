import React from 'react';

import { Link } from 'react-router-dom';

import {
    MainContainer
} from './styles';

import manager from '../../global/assets/images/manager.gif';
import projetos from '../../global/assets/icons/projetos.svg';
import blog from '../../global/assets/icons/blog.svg';
import team from '../../global/assets/icons/team.svg';


export default function Main() {
    return (
        <MainContainer>
            <section>
                <img src={manager}></img>
                <h1>Welcome to NovaCrypt<br /> South Brazil</h1>
            </section>
            <article>
                <h2>What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </article>
            <main>
                <div></div>
            </main>
        </MainContainer>
    );
}