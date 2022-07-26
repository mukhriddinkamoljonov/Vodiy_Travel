import styled from "styled-components";

export const GlobalStyle = styled.div``;

export const GlobalContainer = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 1280px) {
    /* margin: 0 20px; */
  }
`;

export const WrapperNavbar = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  z-index: 999;

  .sticky_nav {
    transition: all 0.5s ease;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    background-color: #fff;
    ul {
      margin-right: 70px;
    }
    li {
      color: #223645;
    }
  }

  @media (max-width: 1060px) {
    .sticky_nav {
      position: initial;
      background-color: transparent;
    }
  }
`;

export const TopNavbar = styled.div`
  background-color: transparent;
  width: 100%;
  z-index: 99;
  border-bottom: 1px solid rgba(167, 167, 167, 0.25);
  padding: 10px 0;
`;

export const BottomNavbar = styled.div`
  background-color: transparent;
  width: 100%;
  z-index: 99;

  @media (max-width: 1060px) {
  }
`;

export const InnerAndOuterContainer = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 129.837px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(http://www.xondoppitravel.com/admin/files/ipeBoc.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-size: 60px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 0;
  opacity: 0.9;


  h1 {
    font-size: 60px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 0;
    color: #fff;
  }
  
  @media(max-width:720px) {
    h1 {
      font-size:40px ;
    }
  }

  @media(max-width:480px) {
    h1 {
      font-size:32px ;
      text-align: center;
    }
  }
`;

export const TextWrap = styled.div`
  margin: 50px 0;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 550px) {
    text-align: left;
  }
  h6 {
    color: #00a795;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 800;
    margin: 0 0 15px;
    line-height: 1.2;
    color: #1e635c;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #626672;
    max-width: 750px;
    margin: 0 auto;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
`;

export const TextWrapWhite = styled.div`
  h2 {
    margin: 0 0 15px;
    line-height: 1.2;
    color: #ffffff;
    font-size: 40px;
    font-weight: 800;
  }

  p {
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    color: #ffffff;
    margin-bottom: 40px;
    font-size: 16px;
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
`;
