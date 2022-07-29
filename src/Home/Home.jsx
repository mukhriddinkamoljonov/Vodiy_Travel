import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BlogImgWrap,
  BlogSection,
  ButtonWrapper,
  ClientBrand,
  Header,
  HomeContainer,
  LeftSight,
  RightSight,
  RightSightContainer,
  SliderImgWrapper,
  SwiperChild,
} from "./HomeStyle.styled";
import Slider from "react-slick";
import SlickImg from "../assets/photo/forHomePage1.jpg";
import SlickImg2 from "../assets/photo/forHOmePage2.jpg";
import SlickImg3 from "../assets/photo/maldive.jpg";
import Carusel from "../Components/Carusel/Carusel";
import Button from "../Components/Button/Button";
import ButtonOutLined from "../Components/Button/ButtonOutLined";
import ImagerView from "../Components/Imager/Imager";
import Client from "../Components/Client/Client";
import Testimonial from "../Components/Testimonial/Testimonial";
import {
  GlobalContainer,
  Overlay,
  TextWrap,
} from "../styles/GlobalStyle.styled";
import { FaUmbrellaBeach, FaUserTag, FaHeadset } from "react-icons/fa";
import img from "../assets/photo/sma.jpg";
import SecondCard from "../Components/SecondCard";
import HomeCall from "../Components/HomeCallBack/HomeCall";
import { HomeCallWrap } from "../Components/HomeCallBack/HomeCallStyle";

const Home = () => {
  let swiperData = [
    {
      id: 1,
      title: "Mo'jizaviy Sohillar",
      paragraph:
        "  Kundalik tashvishlar va muammolardan charchagan yurak sayohatlar qilishni juda xoxlaydi. Uydan uzoqda bo’lgan yurtlarda o’tkazgan kunlar inson uchun hayotining unutilmas onlari bo’lib tarixga mixlanadi.",
      img: SlickImg,
    },
    {
      id: 2,
      title: "Saudiya Arabistoni Bo'ylab Sayohat",
      paragraph:
        "  Inson hayotga kelibdimi, uni mazmunli o’tkaza olishni ham bilishi kerak. Hayotingizning har bir daqiqasini qiziqarli va unutilmas o’tkazishga odatlaning.",
      img: SlickImg2,
    },
    {
      id: 3,
      title: "Samarqand shahri",
      paragraph:
        " Ehtimol, bu yangi kashf qilingan o’lka unga g’oyat ajoyib, aql-zakovatga boy va iqtisodiy tarafdan o’ta rivojlangan narsa tuyulishi mumkin, hattoki ayrimlar shunday o’lkalarga ko’chib o’tishni ham istaydilar.",
      img: SlickImg3,
    },
  ];

  let blogs = [
    {
      id: 1,
      icon: <FaUmbrellaBeach />,
      title: "Mavjud Turizm",
      paragraph: "Baxtingizni qidiring, shaharlar va davlatlarni kashf qiling,",
    },
    {
      id: 2,
      icon: <FaUserTag />,
      title: "ENG YAXSHI SAYOHATLAR",
      paragraph:
        "boshqa xalqlarning turmush tarzi, madaniyati va tarixi bilan tanishing! Hayotingizning unutilmas onlarida biz sizning yoningizda bo’lamiz",
    },
    {
      id: 3,
      icon: <FaHeadset />,
      title: "KERAKLI MA'LUMOTLAR",
      paragraph:
        "Bu yangi kashf qilingan o’lka unga g’oyat ajoyib, aql-zakovatga boy va iqtisodiy tarafdan o’ta rivojlangan narsa tuyulishi mumkin.",
    },
  ];

  const data = [
    {
      id: 1,
      img: img,
      title: "Samarqand qadimiy joylardan biri",
      description: " Oʻzbekiston Respublikasidagi qadimiy shahar.",
      day: "10 kun",
      location: "Samarqand",
      price: "10 890 000 so'm ",
      forHowMany: "Har biriga",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          right: "5%",
          zIndex: 99,
          fontSize: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          left: "5%",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <HomeContainer>
        <Header>
          <Slider {...settings}>
            {swiperData.map((val, index) => (
              <SliderImgWrapper key={index}>
                <img src={val.img} alt="" />
                <Overlay></Overlay>
                <SwiperChild>
                  <h1>{val.title}</h1>
                  <p>{val.paragraph}</p>
                  <div className="btnWrapper">
                    <Button>Chet elga sayohat</Button>
                    <ButtonOutLined>Ichki sayohat</ButtonOutLined>
                  </div>
                </SwiperChild>
              </SliderImgWrapper>
            ))}
          </Slider>
        </Header>
      </HomeContainer>
      <GlobalContainer>
        <BlogSection>
          <LeftSight>
            <BlogImgWrap>
              <img src={img} alt="" />
              <div className="blogImgOver">
                <p className="imgOverText">
                  Biz siz uchun eng yahshi sayohatni taklif etamiz
                </p>
              </div>
              <h1>Sayohat manzilini tanlashda adashmang</h1>
              <p>
                Inson hayotga kelibdimi, uni mazmunli o’tkaza olishni ham
                bilishi kerak. Hayotingizning har bir daqiqasini qiziqarli va
                unutilmas o’tkazishga odatlaning. Kundalik tashvishlar va
                muammolardan charchagan yurak sayohatlar qilishni juda xoxlaydi.
                Uydan uzoqda bo’lgan yurtlarda o’tkazgan kunlar inson uchun
                hayotining unutilmas onlari bo’lib tarixga mixlanadi. Boshqa
                mamlakatlarga tashrif buyurib, ularning madaniyati, aholisi,
                tabiati bilan tanishishim – ijobiy his-tuyg’ularga va ko’plab
                taassurotlarga ega bo’lishim mumkin. Bularning barchasi kundalik
                hayotdan, doimiy uy ishlaridan xalos bo’lishga va nihoyat,
                shunchaki hordiq chiqarishga ko’maklashadi. Shuning uchun,
                sayohatlar qilish zarurati har bir inson tug’ilish paytidan
                boshlab unga xosdir, deb hisoblash mumkin. Hattoki go’daklar ham
                asta-sekin o’zlarining tevarak-atroflarini o’rgana boshlashadi.{" "}
              </p>
              <ClientBrand>
                <div className="brandImgDiv">
                  <img
                    src="	http://www.xondoppitravel.com/admin/files/client-img8.png"
                    alt=""
                  />
                </div>
                <div className="brandImgDiv">
                  <img
                    src="	http://www.xondoppitravel.com/admin/files/client-img9.png"
                    alt=""
                  />
                </div>
                <div className="brandImgDiv">
                  <img
                    src="		http://www.xondoppitravel.com/admin/files/client-img10.png"
                    alt=""
                  />
                </div>
                <div className="brandImgDiv">
                  <img
                    src="http://www.xondoppitravel.com/admin/files/client-img11.png"
                    alt=""
                  />
                </div>
              </ClientBrand>
            </BlogImgWrap>
          </LeftSight>
          <RightSight>
            {blogs.map((blog,index) => (
              <RightSightContainer key={index}>
                <div className="icon_box">
                  <div className="icon">{blog.icon}</div>
                  <h3>{blog.title}</h3>
                  <p>{blog.paragraph}</p>
                </div>
              </RightSightContainer>
            ))}
          </RightSight>
        </BlogSection>
      </GlobalContainer>
      <TextWrap>
        <h6>TURIZM</h6>
        <h2>TASHQI TURIZM</h2>
        <p>
          Boshqa mamlakatlarga tashrif buyurib, ularning madaniyati, aholisi,
          tabiati bilan tanishishim – ijobiy his-tuyg’ularga va ko’plab
          taassurotlarga ega bo’lishim mumkin. Bularning barchasi kundalik
          hayotdan, doimiy uy ishlaridan xalos bo’lishga va nihoyat, shunchaki
          hordiq chiqarishga ko’maklashadi.
        </p>
      </TextWrap>
      <ButtonWrapper>
        <Button>BARCHASINI KO'RISH</Button>
      </ButtonWrapper>
      <Carusel />
      <ButtonWrapper>
        <TextWrap>
          <h6>Ichki Turizm</h6>
          <h2>ICHKI TURIZM</h2>
          <p>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
        </TextWrap>
        <GlobalContainer>
          <div className="py-[95px]">
            {data.map((item) => (
              <SecondCard
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                day={item.day}
                location={item.location}
                price={item.price}
                forHowMany={item.forHowMany}
              />
            ))}
          </div>
        </GlobalContainer>
        <Button>BARCHASINI KO'RISH</Button>
      </ButtonWrapper>
      <HomeCall />
      <TextWrap>
        <h6>Sayohatchilardan olingan FOTOLAR</h6>
        <h2>FOTOGALEREYA</h2>
        <p>
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent
        </p>
      </TextWrap>
      <ImagerView />
      <Client />
      <Testimonial />
    </>
  );
};

export default Home;
