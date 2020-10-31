import styled from "styled-components";

export const LauchingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 72px;
    background-color: #010E13;
    border: 1px solid #00ADEF;
    padding: 10px 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    div:first-child{
        display: flex;
        justify-content: center;
        text-align: baseline;
        width: 100%;
        img{
            width: 80px;
            padding: 5px 10px;
            margin-right: 15px;
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1{
                color: #00ADEF;
                font-weight: 700;
                font-size: 18px;
                text-transform: uppercase;
                font-family: Exo;
            }
            p{
                font-family: Exo;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 21px;
                color: #FFFFFF;
            }
        }
    }
    img{
        width: 50%;
        padding-top: 20px;
    }
`;
