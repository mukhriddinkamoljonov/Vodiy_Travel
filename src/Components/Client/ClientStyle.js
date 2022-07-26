import styled from "styled-components";

export const SectionClient = styled.div`
  position: relative;
  margin: 50px 0;
  height: 70vh;
  background-image: url("http://www.xondoppitravel.com/admin/files/banner-img1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  h5 {
    margin: 0 0 15px;
    line-height: 1.2;
    font-size: 16px;
    color: #fff;
  }

  h2 {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    margin: 0 0 15px;
    line-height: 1.2;
  }

  p {
    margin-bottom: 30px;
    color: #fff;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    font-size: 15px;
  }

  @media (max-width: 980px) {
    h5 {
      font-size: 14px;
    }

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 850px) {
    height: 85vh;
    text-align: center;
    padding: 20px 0;

    .client_logo ul {
      justify-content: center;
    }
  }
`;

export const ClientContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  .client_row {
    display: flex;
    gap: 50px;
    width: 1220px;
  }

  .col_left {
    float: left;
    width: 100%;
  }

  .col_right {
    float: right;
    width: 100%;
  }

  .client_logo ul {
    display: flex;
  }

  .client_logo ul li {
    padding: 20px 15px;
  }

  .client_logo img {
    width: ;
  }

  @media (max-width: 1290px) {
    .client_row {
      width: 1020px;
    }
  }

  @media (max-width: 1070px) {
    .client_row {
      width: 920px;
      gap: 20px;
    }
  }

  @media (max-width: 980px) {
    .client_row {
      width: 730px;
      gap: 20px;
    }
  }

  @media (max-width: 850px) {
    .client_row {
      flex-direction: column;
    }
  }

  @media (max-width: 820px) {
    .client_row {
      width: inherit;
    }
  }
`;
