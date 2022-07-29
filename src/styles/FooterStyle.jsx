import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding-top: 80px;
  background-color: #263a49;
  z-index: 99 !important;
  border-top: 1px solid #565050;

  @media (max-width: 660px) {
    padding-top: 20px;
  }
`;

export const UpperFooter = styled.div`
  display: flex;
  align-items: inherit;

  @media (max-width: 1280px) {
    gap: 50px;
  }

  @media (max-width: 810px) {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media (max-width: 660px) {
    h3 {
      font-size: 16px;
    }

    ul li {
      font-size: 14px;
    }
    gap: 20px;
    grid-template-columns: auto;

    .row {
      margin: 20px auto;
    }
  }

  .row {
    width: 259px;
    color: #e0e0e0;
  }
  .footer_logo {
    width: 241px;
    height: 55px;
  }

  .textwidget p {
    font-size: 15px;
    margin: 15px 0;
  }

  .widget .ul_items {
    font-size: 16px;
    margin: 20px 0;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
  }
  .widget .ul_items li:hover {
    transition: all 0.3s ease;
    color: #00a795;
  }
  .widget ul {
    font-size: 15px;
    margin: 20px 0;
    font-family: "Montserrat", sans-serif;
  }

  .widget ul li {
    margin: 10px 0;
  }

  .footer_bottom_line .line {
    margin-top: 10px;
    width: 60px;
    height: 2px;
    background-color: #00a795;
  }

  .widget ul li .phoneNum:hover {
    transition: all 0.3s ease;
    color: #00a795;
  }
`;
