import styled from 'styled-components';
import  back from '../../global/assets/icons/back.svg';
export const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    background: url(${back});
    background-repeat: no-repeat;
    background-position: center top;
    background-color: #000000;
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
        background: #15191E;
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
            font-family: Ubuntu, sans-serif;
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
        background: #000000;
        display: flex;
        column-gap: 30px;
        padding-top: 60px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        justify-content: center;
        align-items: center;
        a{
            background: #15191E;
            padding: 30px 10px;
            width: 90%;
            max-width: 260px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Ubuntu;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            align-items: center;
            text-align: center;
            text-decoration: none;
            color: #1CC8EB;
            border: 2px solid transparent;
            transition: all 0.3s;
            outline: none;
            :hover,:focus{
                 border: 2px solid #1CC8EB;
            }
            img{
                width: 80px;
                padding-bottom: 15px;
            }
            
        }
    }
`;