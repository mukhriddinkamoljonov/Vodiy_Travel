import styled from "styled-components";

export const HomeCallWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("http://www.xondoppitravel.com/admin/files/maldives-5-1920x800.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const ContainerClient = styled.div`
  z-index: 1;
  width: 60%;
  margin: 0 auto;
  .btnWrap {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1220px) {
    width: 70%;
  }

  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const VideoButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  .playBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #00a795;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    border-radius: 50%;
    cursor: pointer;
    -webkit-animation: rippleOne 3s infinite;
  }

  .playBtn:after,
  .playBtn:before {
    content: "";
    display: block;
    position: absolute;
    border: 50%;
    border: 3px solid #00a795;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 50%;
    animation: animate 1.5s linear infinite;
    opacity: 0;
  }

  .playBtn:after {
    animation-delay: 0.9s;
  }

  @keyframes animate {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export const HomeCounter = styled.div`
  font-size: 15px;
  color: #626672;
`;

export const CounterContainer = styled.div`
  z-index: 99;
  margin-top: -80px;
  background-color: #ffffff;
  box-shadow: 0px 15px 25px -10px rgb(0 0 0 / 15%);
  display: flex;
  flex: wrap;
  align-items: center;
  border-radius: 25px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 40px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 720px) {
    padding: 20px 0;
  }

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;
export const CounterItem = styled.div`
  border-right: 1px solid rgba(98, 102, 114, 0.23);
  color: #223645;
  padding: 10px 15px 15px;
  text-align: center;
  width: 25%;

  @media (max-width: 550px) {
    width: initial;
    padding: 8px 10px;
  }
  span {
    color: #00a795;
    font-size: 50px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  p {
    color: #1e635c;
    font-size: 15px;
    text-transform: uppercase;
  }

  @media (max-width: 720px) {
    span {
      font-size: 35px;
    }

    p {
      font-size: 12px;
      padding-top: 10px;
    }
  }
`;
