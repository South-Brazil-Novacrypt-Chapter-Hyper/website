import styled from 'styled-components';

import  back from '../../global/assets/icons/back.svg';
import  laquier from '../../global/assets/icons/laquier.svg';


export const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    background: url(${back});
    background-repeat: no-repeat;
    background-position: center top;
    background-color: #030303;
    section{
        padding-top: 64px;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 80%;
            max-width: 300px;
            margin: 5px 0px;
        }
        h1{
            font-family: Exo;
            font-style: normal;
            font-weight: 500;
            font-size: 26px;
            line-height: 47px;
            text-align: center;
            color: #00ADEF;
            margin: 10px 0px;
        }
    }
    article{
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: #0a0e0f;
        h2{
            font-family: Poppins, sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 19px;
            line-height: 32px;
            text-align: center;
            color: #E5E5E5;
            margin-bottom: 15px;
        }
        p{
            font-family: Open Sans, sans-serif;
            font-style: normal;
            font-size: 14px;
            line-height: 23px;
            width: 100%;
            max-width: 400px;
            text-align: center;
            color: #E5E5E5;
        }
    }
    main{
        width: 100%;
        padding: 10px 20px;
        background: url(${laquier});
        background-size: 40%;
        background-position: top left;
        background-repeat: no-repeat;
        height: 60vh;
    }
`;