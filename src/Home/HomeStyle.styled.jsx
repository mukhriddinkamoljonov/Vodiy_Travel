import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 99;

  @media (max-width: 830px) {
    .slick-next:before,
    .slick-prev:before {
      display: none;
    }
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 30px !important;
  }
`;

export const SliderImgWrapper = styled.div`
  position: relative;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1105px) {
  }
`;
export const SwiperChild = styled.div`
  left: 50%;
  position: absolute;
  top: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;

  @media (max-width: 1320px) {
    width: 60%;
  }

  @media (max-width: 1220px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 80%;
    top: 50%;
  }
  @media (max-width: 830px) {
    width: 80%;
    top: 61%;
  }

  .btnWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 15px;
  }

  @media (max-width: 460px) {
    .btnWrapper {
      margin-top: 40px;
      flex-direction: column;
      gap: 10px;
    }
  }
  .secondBtn {
    border: 2px solid #fff;
    transition: background-color 0.3s, border-color 0.3s;
    background-color: transparent;
  }

  h1 {
    color: #fff;
    font-size: 70px;
    line-height: 1.1;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    color: #ffffff;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 55px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 13px;
      margin: 0 0 12px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 50px 0;
`;

export const BlogSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 70px 0;

  @media (max-width: 670px) {
    margin: 70px 0px;
    flex-direction: column;
    .blogImgOver {
      position: initial;
    }
  }
`;

export const BlogImgWrap = styled.div`
  position: relative;
  padding: 0 10px;
  .blogImgOver {
    width: 315px;
    position: absolute;
    top: 18%;
    right: -15%;
    padding: 20px 40px;
    border-radius: 12px;
    background-color: #00a795;
  }

  .imgOverText {
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 0;
    color: #ffffff;
    line-height: 1.3;
  }

  img {
    border-radius: 12px;
    margin-bottom: 50px;
    object-fit: cover;
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    margin: 0 0 15px;
    line-height: 1.2;
    color: #00a795;
  }

  p {
    font-size: 15px;
    color: #626672;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-style: normal;
  }



  @media (max-width: 1060px) {
    .blogImgOver {
      width: 250px;
      top: 14%;
      right: -10%;
    }

    .imgOverText {
      font-size: 22px;
    }
  }
  @media (max-width: 780px) {
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 670px) {
    .blogImgOver {
      position: initial;
      width: 100%;
      padding: 30px;
      margin-bottom: 20px;
    }
    h1 {
      font-size:30px ;
    }
  }
`;

export const ClientBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 5%);
  border-radius: 12px;
  padding: 25px;
  margin-top: 50px;
  background-color: #ffffff;
  .brandImgDiv {
    margin: 0 10px;
  }
  .brandImgDiv img {
    margin: 0;
  }
  @media (max-width: 520px) {
    margin:50px 0 ;
    display: grid;
    grid-template-columns: auto auto;
    .brandImgDiv {
      margin: 20px;
    }
  }
`;

export const LeftSight = styled.div`
  flex: 5;
`;

export const RightSightContainer = styled.div`
  padding: 0 50px;
  margin: 20px 0;
  @media (max-width: 960px) {
    padding: 0 25px;
  }

  .icon_box {
    text-align: center;
  }

  .icon {
    width: 100px;
    height: 100px;
    background-color: #00a795;
    padding: 25px;
    border-radius: 50%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-bottom: 20px;
  }

  h3 {
    color: #1e635c;
    margin: 0 0 15px;
    line-height: 1.2;
    font-size: 22px;
    font-weight: 700;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 15px;
    color: #626672;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
  }
`;

export const RightSight = styled.div`
  float: right;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  flex: 3;
  @media (max-width: 960px) {
    padding-left: 50px;
  }

  @media (max-width: 520px) {
    width: inherit !important;
    padding-left: 0;
  }
`;
