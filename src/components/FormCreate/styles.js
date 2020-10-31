import styled from "styled-components";

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
        section{
            flex-direction: row;
        }
        span{
            font-family: Inter;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 21px;
            text-align: right;
            color: #FFFFFF;
        }
        label{
            font-family: Inter;
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            line-height: 21px;
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
            }
        }
        input[type=checkbox]{
            margin-right: 10px;
            margin-left: 5px;
            margin-top: 5px;
        }
        >div, section{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;
            span:first-child{
                margin-right: 10px;
            >div{
                display: flex;
                align-items: center;
            }
        }
    }
`;
