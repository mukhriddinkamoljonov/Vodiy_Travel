import React, {useEffect} from "react";
import SecondCard from "../../Components/SecondCard";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
import img from "../../assets/photo/sma.jpg";
import img2 from "../../assets/photo/card.jpg";
import { InnerContainer } from "./innerTurizmStyle.styled";

const InnerTurizm = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
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
          <h1>TUR PAKETLAR</h1>
        </GlobalContainer>
      </InnerContainer>
      <div>
        <GlobalContainer>
          <div>
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

export default InnerTurizm;
