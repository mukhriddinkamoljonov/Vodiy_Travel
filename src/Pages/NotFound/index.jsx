import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
const Index = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    AOS.init();
  }, []);
  return (
    <InnerAndOuterContainer>
      <GlobalContainer>
        <h4 data-aos="fade-up" data-aos-duration="400">
          Sahifa topilmadi
        </h4>
        <p className="text-center mt-4">404</p>
      </GlobalContainer>
    </InnerAndOuterContainer>
  );
};

export default Index;
