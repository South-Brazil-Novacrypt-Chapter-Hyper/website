import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 67px;
  background: #000;

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 20px 0px 0px;

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
`;
