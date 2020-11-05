import styled from "styled-components";

export const MakerContainer = styled.section`
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: #000000;
`;
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

export const FormCreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    background-color: #010E13;
    border: 1px solid #00ADEF;
    border-radius: 10px 10px 0px 0px;
    margin: 0 auto;
    position: relative;
    top: -2vh;
    >div:first-child{
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 10px 10px 0px 0px;
        border-bottom: 1px solid #00ADEF;
        margin: 0 auto;
        padding: 15px 20px;
        background-color: #010E13;
        z-index: 9;
        span{
            font-family: Inter;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 21px;
            text-align: right;
            color: #00ADEF;
        }
        label{
            font-family: Inter;
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            text-align: right;
            color: #00ADEF;
        }
        textarea{
            margin-top: 5px;
            height: 140px;
            resize: none;
        }
        input[type=text], textarea{
            background: #010E13;
            border: 1px solid #00ADEF;
            border-radius: 4px;
            outline: none;
            padding: 5px 7px;
            font-family: Exo;
            width: 100%;
            font-style: normal;
            transition: all 0.4s;
            font-size: 13px;
            margin-top: 5px;
            color: #FFFFFF;
            :focus{
                border: 1px solid white;
                background: #000000;
            }
        }
        input[type=checkbox]{
            
        }
        >div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;
            span:first-child{
            margin-right: 10px;
        }
        >section{
            display: flex;
            flex-direction: row;
            div{
                display: flex;
                padding: 0;
                margin: 0;
            }
        }
    }
`;
