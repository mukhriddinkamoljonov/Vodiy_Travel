import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobalContainer } from "../../styles/GlobalStyle.styled";
import PackageCard from "../../Components/Package/Package";
import img from "../../assets/photo/sydney.jpg";
import { DiscountContainer } from "./DiscountStyle.style";

const Discount = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    AOS.init();
  }, []);
  const data = [
    {
      id: 1,
      aos: "fade-right",
      img: img,
      package: "Contact us 12%",
      day: "8 day",
      location: "Samarqand",
      title: "TOUR TO SATORINI",
      desc: "Malesuada incidunt excepturi proident quo eros? Id interd...",
      price: "Price: 16,653,000 so'm or $1525 $1255",
    },
    {
      id: 2,
      img: img,
      aos: "fade-right",
      package: "Contact us 12%",
      day: "8 day",
      location: "Samarqand",
      title: "TOUR TO SATORINI",
      desc: "Malesuada incidunt excepturi proident quo eros? Id interd...",
      price: "Price: 16,653,000 so'm or $1525 $1255",
    },
    {
      id: 3,
      img: img,
      aos: "fade-right",
      package: "Contact us 12%",
      day: "8 day",
      location: "Samarqand",
      title: "TOUR TO SATORINI",
      desc: "Malesuada incidunt excepturi proident quo eros? Id interd...",
      price: "Price: 16,653,000 so'm or $1525 $1255",
    },
  ];
  return (
    <div>
      <DiscountContainer>
        <GlobalContainer>
          <h1 data-aos="fade-up" data-aos-duration="400">CHEGIRMALAR</h1>
        </GlobalContainer>
      </DiscountContainer>
      <GlobalContainer>
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 md:gap-8 my-[95px]"
        >
          {data.map((item) => (
            <PackageCard
              key={item.id}
              className="col-span-6"
              background={item.img}
              package={item.package}
              day={item.day}
              location={item.location}
              title={item.title}
              desc={item.desc}
              price={item.price}
              link={item.id}
            />
          ))}
        </div>
      </GlobalContainer>
    </div>
  );
};

export default Discount;
