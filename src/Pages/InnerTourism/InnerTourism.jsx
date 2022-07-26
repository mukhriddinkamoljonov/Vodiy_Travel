import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SecondCard from "../../Components/SecondCard";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
import img from "../../assets/photo/sma.jpg";
import img2 from "../../assets/photo/card.jpg";
import { InnerContainer } from "./innerTourismStyle.styled";

const InnerTourism = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    AOS.init();
  }, []);
  const data = [
    {
      id: "samarqand",
      img: img,
      title: "Samarqand qadimiy joylardan biri",
      description: " Oʻzbekiston Respublikasidagi qadimiy shahar.",
      day: "10 kun",
      location: "Samarqand",
      price: "10 890 000 so'm ",
      forHowMany: "Har biriga",
    },
    {
      id: "fergana",
      img: img2,
      title: "Farg'ona qadimiy joylardan biri",
      description: " Oʻzbekiston Respublikasidagi qadimiy shahar.",
      day: "20 kun",
      location: "Farg'ona",
      price: "20 890 000 so'm ",
      forHowMany: "Har biriga",
    },
    {
      id: "buhoro",
      img: img,
      title: "Buhoro qadimiy joylardan biri",
      description: " Oʻzbekiston Respublikasidagi qadimiy shahar.",
      day: "10 kun",
      location: "Buhoro",
      price: "10 890 000 so'm ",
      forHowMany: "Har biriga",
    },
  ];

  return (
    <>
      <InnerContainer>
        <GlobalContainer>
          <h1 data-aos="fade-up" data-aos-duration="400">
            TUR PAKETLAR
          </h1>
        </GlobalContainer>
      </InnerContainer>
      <div>
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
                link={item.id}
              />
            ))}
          </div>
        </GlobalContainer>
      </div>
    </>
  );
};

export default InnerTourism;
