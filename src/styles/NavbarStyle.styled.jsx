import styled from "styled-components";

export const WrapperTopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbarPhone {
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: right;
  }

  .navbarPhoneDiv {
    line-height: 1.4;
  }

  .phoneIcon {
    color: #fff;
  }

  .navbarPhoneDiv p:nth-child(1) {
    color: #fff;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    text-align: left;
  }

  .navbarPhoneDiv p:nth-child(2) {
    color: #fff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
  }

  .navbarPhoneIcon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #00a795;
  }

  .navClock {
    color: #fff;
  }

  .navbarLogo {
    max-width: 210px;
    padding: 5px 20px;
    transition: all 0.4s ease;
  }

  .navbarLogo:hover {
    opacity: 0.6;
  }

  .navbarTimeDiv {
    color: #fff;
    font-size: 16px;
    line-height: 1.2;
  }

  @media (max-width: 660px) {
    .navbarPhoneDiv,
    .navbarTimeDiv {
      display: none;
    }
  }
`;

export const WrapperBottomNavbar = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  .stiky_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }

  @media (max-width: 1060px) {
    .stiky_nav {
      background-color: #00a795;
    }
  }
`;

export const SocialMediaIcons = styled.div`
  color: #fff;
  ul {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    font-size: 16px;
    border: 1px solid rgba(167, 167, 167, 0.5);
    padding: 10px;
    border-radius: 100%;
    transition: all 0.3s ease;
  }
  ul li:hover {
    border: 1px solid #00a795;
  }
`;

export const NavbarLisItems = styled.div`
  ul {
    display: flex;
    li {
      margin: 0 20px;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.3;
      position: relative;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }

    li:hover {
      color: #00a795;
    }
  }

  @media (max-width: 1060px) {
    display: none;
  }
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    padding: 11px 22px;
    font-size: 14px;
    color: #fff;
    width: 90px;
    height: 38px;
    background: #00a795;
    border-radius: 25px;
  }

  button:hover {
    transition: background-color 0.3s;
  }
`;

export const HamburegerWrap = styled.div`
  display: none;

  .HamburgerDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #626672;
    border-bottom: 1px solid #626672;
    padding: 10px 0;
    gap: 10px;
    margin: 0 auto;
    cursor: pointer;
    color: #fff;
  }

  span {
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 1060px) {
    display: block;
    .sticky_menu_nav {
      transition: all 0.5s ease;
      width: 100%;
      position: fixed;
      top: 0;
      background-color: #fff;
    }

    .sticky_menu_nav .HamburgerDiv {
      color: black;
    }
  }
`;

export const NavbarMenuList = styled.div`
  text-align: center;
  transition: "all " ${(props) => (props.toggler ? "1s" : "0")} "ease";
  display: ${(props) => (props.toggler ? "block" : "none")};
  transition: all 03s ease;
  ul {
    background-color: #fff;
  }
  li {
    padding: 20px 0;
    border-bottom: 1px solid #cfc8c8;
  }
  li:hover {
    background-color: #00a795;
    color: #fff;
  }
`;
