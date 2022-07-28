import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import DropDowner from "../Components/DropDown/DropDown";
import {
  GlobalContainer,
  TopNavbar,
  WrapperNavbar,
} from "../styles/GlobalStyle.styled";
import {
  Button,
  NavbarLisItems,
  SocialMediaIcons,
  WrapperBottomNavbar,
  WrapperTopNavbar,
  HamburegerWrap,
  NavbarMenuList,
} from "../styles/NavbarStyle.styled";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [stickyMenuClass, setStickyMenuClass] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickMenuNavbar);
    return () => window.removeEventListener("scroll", stickMenuNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky_nav") : setStickyClass("");
    }
  };
  const stickMenuNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the
      windowHeight > 151
        ? setStickyMenuClass("sticky_menu_nav")
        : setStickyMenuClass("");
    }
  };

  return (
    <WrapperNavbar>
      <TopNavbar>
        <GlobalContainer>
          <WrapperTopNavbar>
            <div>
              <a href="tel:+998-93-971-19-97" className="navbarPhone">
                <span className="navbarPhoneIcon">
                  <BiPhoneCall className="phoneIcon" />
                </span>
                <div className="navbarPhoneDiv">
                  <p>Telefon Raqam:</p>
                  <p>+998-93-971-19-97</p>
                </div>
              </a>
            </div>
            <div className="navbarLogo">
              <Link to="/" className="text-white text-[28px]">
                Logo
              </Link>
            </div>
            <div className="navbarWorkTime">
              <div className="navbarPhone">
                <div className="navbarTimeDiv">
                  <p>Ish Vaqti</p>
                  <p>00:00-00:00</p>
                </div>
                <span className="navbarPhoneIcon">
                  <AiOutlineClockCircle className="navClock" />
                </span>
              </div>
            </div>
          </WrapperTopNavbar>
        </GlobalContainer>
      </TopNavbar>
      <div className={`stiky_nav ${stickyClass}`}>
        <GlobalContainer>
          <WrapperBottomNavbar>
            <SocialMediaIcons>
              <ul>
                <li>
                  <a href="#">
                    <GrFacebookOption />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTelegramPlane />
                  </a>
                </li>
              </ul>
            </SocialMediaIcons>

            <NavbarLisItems>
              <ul>
                <li>
                  <Link to="/">BOSH SAHIFA</Link>
                </li>
                <li>
                  <Link to="/outerTurizm" onClick={() => console.log("Outer")}>
                    TASHQI TURIZM
                  </Link>
                </li>
                <li>
                  <Link to="/innerTurizm" onClick={() => console.log("Inner")}>
                    ICHKI TURIZM
                  </Link>
                </li>
                <li>
                  <Link to="/discount" onClick={() => console.log("Chegirma")}>
                    CHEGIRMA
                  </Link>
                </li>
                <li>
                  <Link to="/contact">ALOQA </Link>
                </li>
                <li>
                  <DropDowner />
                </li>
              </ul>
            </NavbarLisItems>
            <Button>
              <Link to="/contact"><button>ALOQA</button></Link>
            </Button>
          </WrapperBottomNavbar>
        </GlobalContainer>
      </div>
      <HamburegerWrap>
        <div className={`stiky_menu ${stickyMenuClass}`}>
          <div className="HamburgerDiv" onClick={() => setToggle(!toggle)}>
            {toggle ? <CgClose /> : <FiMenu />}
            <span>Menu</span>
          </div>
      <NavbarMenuList toggler={toggle}>
        <ul>
          <li onClick={() => setToggle(!toggle)}>
            <Link to="/">BOSH SAHIFA</Link>
          </li>
          <li>
            <Link to="/outerTurizm" onClick={() => setToggle(!toggle)}>
              TASHQI TURIZM
            </Link>
          </li>
          <li>
            <Link to="/innerTurizm" onClick={() => setToggle(!toggle)}>
              ICHKI TURIZM
            </Link>
          </li>
          <li>
            <Link to="/discount" onClick={() => setToggle(!toggle)}>
              CHEGIRMA
            </Link>
          </li>
          <li onClick={() => setToggle(!toggle)}>
            <Link to="/contact">ALOQA </Link>
          </li>
          <li>
            <DropDowner />
          </li>
        </ul>
      </NavbarMenuList>
        </div>
      </HamburegerWrap>
    </WrapperNavbar>
  );
};

export default Navbar;
