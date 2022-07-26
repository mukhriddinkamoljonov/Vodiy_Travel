import React from "react";
import { Link } from "react-router-dom";
import ImagerView from "../Components/Imager/Imager";
import { FooterContainer, UpperFooter } from "../styles/FooterStyle";
import {  GlobalContainer } from "../styles/GlobalStyle.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <GlobalContainer>
        <UpperFooter>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <div className="footer_logo">
                  <a href="#">LOGO</a>
                </div>
                <div className="textwidget ">
                  <p>
                    O'zbekistondada sayohlik agentliklar bo’limining so’rov
                    ma'lumoti keltirilgan sahifadan iborat. Bu katalog sizga
                    ularning manzil va telefonlari.
                  </p>
                </div>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <div className="footer_bottom_line">
                  <h3 className="widget-title">Buyurtma Berish </h3>
                  <p className="line"></p>
                </div>
                <ul className="ul_items">
                  <li>
                    <Link to="/outerTurizm">Tashqi turizm</Link>
                  </li>
                  <li>
                    <Link to="/innerTurizm">Ichki turizm</Link>
                  </li>
                  <li>
                    <Link to="/discount">Chegirma</Link>
                  </li>
                  <li>
                    <Link to="/contact">Aloqa</Link>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <div className="footer_bottom_line">
                  <h3 className="widget-title">BIZ BILAN ALOQA </h3>
                  <p className="line"></p>
                </div>
                <ul>
                  <li>
                    Bemalol bog'laning va bizga yetib boring!! va shunga harakat
                    qiling
                  </li>
                  <li>
                    <i></i>
                    <a className="phoneNum" href="tel:+998-93-971-19-97">
                      +998-93-971-19-97
                    </a>
                  </li>
                  <li>
                    <i></i>
                    <a className="phoneNum" href="mail:to">
                      muha@gmail.com
                    </a>
                  </li>
                  <li>
                    <i></i>
                    3146 Koontz, Kaliforniya
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <div className="footer_bottom_line">
                  <h3 className="widget-title">GALERIYA </h3>
                  <p className="line"></p>
                </div>
                <ul>
                  <ImagerView />
                </ul>
              </aside>
            </div>
          </div>
        </UpperFooter>
      </GlobalContainer>
    </FooterContainer>
  );
};

export default Footer;
