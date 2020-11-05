import styled from 'styled-components';

export const HeaderContainer = styled.section`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
    background: black;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: center;
    div:first-child{
        display: flex;
        align-items: center;
        a{
            transition: all 0.6s;
            :hover{
                opacity: 0.6;
            }
        }
        img{
            width: 60px;
            margin-right: 10px;
        }
        span{
            font-family: Open Sans;
            font-size: 16px;
            color: white;
            font-weight: 500;
        }
    }
    div:last-child{
        display: flex;
        align-items: center;
        a{
            display: flex;
            align-items: center;
            padding: 5px 10px;
            border-radius: 5px;
            justify-content: center;
            margin-right: 35px;
            font-family: Open Sans, sans-serif;
            text-decoration: none;
            color: white;
            font-weight: 500px;
            border: 1px solid transparent;
            font-size: 13px;
            transition: all 0.3s;
            outline: none;
            :focus{
                 border: 1px solid #1CC8EB;
            }
            img{
                width: 20px;
                margin-right: 7px;
            }
            :hover{
                background: #00ADEF;
            }
        }
        @media(max-width: 750px){
            display: none;
        }
    }
`;