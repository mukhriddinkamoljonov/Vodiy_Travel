import React, {useEffect} from "react";
import { BsPlayFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GlobalContainer,
  Overlay,
  TextWrap,
  TextWrapWhite,
} from "../../styles/GlobalStyle.styled";
import {
  ContainerClient,
  CounterContainer,
  CounterItem,
  HomeCallWrap,
  HomeCounter,
  VideoButton,
} from "./HomeCallStyle";
import Button from "../Button/Button";
import ButtonOutLined from "../Button/ButtonOutLined";

const HomeCall = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <HomeCallWrap>
        <GlobalContainer>
          <ContainerClient>
            <VideoButton>
              <div>
                <a
                  id="video-container"
                  data-fancybox="video-gallery"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=2OYar8OHEOU"
                >
                  <div className="playBtn">
                    <i>
                      <BsPlayFill />
                    </i>
                  </div>
                </a>
              </div>
            </VideoButton>
            <TextWrapWhite>
              <h2>SIZ SAYOXGA TAYYORMISIZMI? BIZNI ESLA !!</h2>
              <p>
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>
            </TextWrapWhite>
            <div className="btnWrapper">
              <Button>Chet elga sayohat</Button>
              <ButtonOutLined>Ichki sayohat</ButtonOutLined>
            </div>
          </ContainerClient>
        </GlobalContainer>
        <Overlay></Overlay>
      </HomeCallWrap>
      <GlobalContainer>
        <HomeCounter>
          <CounterContainer>
            <CounterItem>
              <span>18+</span>
              <p>FAOL A'ZOLAR</p>
            </CounterItem>
            <CounterItem>
              <span>220+</span>
              <p>SAYOL MAQSASI</p>
            </CounterItem>
            <CounterItem>
              <span>75+</span>
              <p>SAYAHAT GUIDLARI</p>
            </CounterItem>
          </CounterContainer>
        </HomeCounter>
        <TextWrap data-aos="fade-up" >
          <h6>MAXSUS PAKETLARIMIZ</h6>
          <h2>TAKLIF VA CHEGIRMA</h2>
          <p>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
        </TextWrap>
      </GlobalContainer>
    </>
  );
};

export default HomeCall;
