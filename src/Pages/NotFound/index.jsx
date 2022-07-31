import React, {useEffect} from "react";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
const Index = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <InnerAndOuterContainer>
      <GlobalContainer>
        <h1 data-aos="fade-up" data-aos-duration="400">404</h1>
      </GlobalContainer>
    </InnerAndOuterContainer>
  );
};

export default Index;
