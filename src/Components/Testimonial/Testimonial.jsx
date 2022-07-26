import React from "react";
import Slider from "react-slick";
import { AiTwotoneStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { GlobalContainer, TextWrap } from "../../styles/GlobalStyle.styled";

import {
  CaruselCard,
  CaruselItem,
  CaruselWrapper,
  Quote,
  TestimonialContainer,
} from "./TestimonialStyle";
import ReactStars from "react-rating-stars-component";

const Testimonial = () => {
  let caruselData = [
    {
      id: 1,
      starAmount: 4,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Otabek Abdulhamid",
      status: "Sayohatchilar",
    },
    {
      id: 2,
      starAmount: 3,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Temur Ismon",
      status: "Sayyoh",
    },
    {
      id: 3,
      starAmount: 5,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Nurbek Abdulhamid",
      status: "Sayohatchilar",
    },
    {
      id: 4,
      starAmount: 2,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Sanjar Ismon",
      status: "Sayohatchilar",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 870,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1124,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <section>
      <GlobalContainer>
        <TestimonialContainer>
          <TextWrap>
            <h6>Sayohatchining guvohnomasi</h6>
            <h2>MIJOZLAR SHARXLARI</h2>
            <p>
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
          </TextWrap>
          <CaruselWrapper>
            <Slider {...settings}>
              {caruselData.map((val, id) => (
                <CaruselItem key={val.id}>
                  <div>
                    <ReactStars />
                  </div>
                  <p className="!mt-2">{val.paragraph}</p>
                  <div className="avatar_wrap">
                    <div className="avatar_img_div">
                      <img
                        src="http://www.xondoppitravel.com/admin/files/image/i%20(1).webp"
                        alt=""
                      />
                    </div>
                    <div className="avatar_name_div">
                      <h5>{val.avatarName}</h5>
                      <span>{val.status}</span>
                    </div>
                    <Quote>
                      <i>
                        <FaQuoteLeft />
                      </i>
                    </Quote>
                  </div>
                </CaruselItem>
              ))}
            </Slider>
          </CaruselWrapper>
        </TestimonialContainer>
      </GlobalContainer>
    </section>
  );
};

export default Testimonial;
