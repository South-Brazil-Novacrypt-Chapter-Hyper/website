import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  padding-top: 67px;
  background: #000;

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px 30px 0px;

    img {
      padding: 25px;
    }

    section {
      h1 {
        font-family: Exo;
        font-style: normal;
        font-weight: 500;
        font-size: 35px;
        line-height: 47px;
        color: #00adef;
      }
      h4 {
        font-family: Exo;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #ffffff;
      }
    }
  }

  .timeline {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  form {
    margin-top: 40px;
    align-self: center;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    font-family: Exo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;

    color: #00adef;

    border: 1px solid #00adef;
    border-radius: 20px;
    padding: 40px;

    input {
      background: #000;
      border-bottom: 1px solid #00adef;
      font-family: Exo;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      color: #ffffff;
    }

    input#project_name {
      width: 30%;
      margin-left: 6px;
    }
    fieldset {
      border: none;
      margin-top: 14px;
    }
    fieldset#platform {
      display: flex;
      flex-direction: row;
      #checkbox_div {
        margin-left: 12px;
        input {
          margin: 0px 6px;
        }
      }
    }
    #description {
      display: flex;
      align-items: center;
    }
    #description_text {
      height: 160px;
      width: 50%;
      border: 1px dashed #00adef;
      border-radius: 35px;
      margin-left: 12px;
    }
  }
`;
