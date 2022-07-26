import React from "react";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
// import { SliderImgWrapper } from "../../Home/HomeStyle.styled";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
import img from "../../assets/photo/sma.jpg";
import img2 from "../../assets/photo/card.jpg";
import img3 from "../../assets/photo/maldive.jpg";
import img4 from "../../assets/photo/sydney.jpg";
import img5 from "../../assets/photo/packageSam.jpg";

const OuterTurismSlug = () => {
  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>Maqsad</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <GlobalContainer>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 lg:gap-7 md:gap-7 gap-0 py-[50px]">
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="uppercase md:text-[27px] text-[14px] font-semibold text-darkGreen">
                  Saudiya Arabistonidagi Manzaralar
                </p>
                <ReactStars
                  count={5}
                  size={22}
                  isHalf={true}
                  activeColor="#ffd700"
                />
              </div>
              <div>
                <div className="bg-green text-center flex items-center justify-center flex-col rounded-3xl text-white w-[130px] h-[130px]">
                  <p className="text-[18px] font-bold">10 910 so'm yoki $1</p>
                  <p className="text-[14px] text-[#cecdcd]">/Har Biriga</p>
                </div>
              </div>
            </div>
            <div className="border gap-20 border-l-0 border-r-0 mb-8 border-b-green border-t-green py-3 flex justify-center items-center">
              <span className="text-[18px] text-[#5a5959]">10 kun</span>
              <span className="text-[18px] text-[#5a5959]">
                Category : Ichki Sayohat
              </span>
              <span className="text-[18px] text-[#5a5959]">
                Saudiya Arabistoni
              </span>
            </div>
            <div className="max-w-[750px]">
              <img className="object-cover rounded-3xl" src={img} alt="" />
            </div>
            <button className="bg-green py-3 px-4 rounded-3xl mt-8 flex items-center justify-center text-white">
              BUYURTMA BERISH
            </button>
            <p className="text-[19px] font-bold mt-8">Ma'lumot :</p>
            <p className="text-[14px] leading-6">
              Boshqa mamlakatlarga tashrif buyurib, ularning madaniyati,
              aholisi, tabiati bilan tanishishim – ijobiy his-tuyg’ularga va
              ko’plab taassurotlarga ega bo’lishim mumkin. Bularning barchasi
              kundalik hayotdan, doimiy uy ishlaridan xalos bo’lishga va
              nihoyat, shunchaki hordiq chiqarishga ko’maklashadi. Shuning
              uchun, sayohatlar qilish zarurati har bir inson tug’ilish paytidan
              boshlab unga xosdir, deb hisoblash mumkin. Hattoki go’daklar ham
              asta-sekin o’zlarining tevarak-atroflarini o’rgana boshlashadi.
              Voyaga etgan inson borki bilimga chanqoqlikni his qiladi, u
              g’arbda yoki sharqda insonlar bizning madaniyatimizdan nimasi
              bilan ajralib turishini, mahalliy aholining hayoti va atrofdagilar
              bilan qanday muomalada bo’lishini bilishni istaydi. Ehtimol, bu
              yangi kashf qilingan o’lka unga g’oyat ajoyib, aql-zakovatga boy
              va iqtisodiy tarafdan o’ta rivojlangan narsa tuyulishi mumkin,
              hattoki ayrimlar shunday o’lkalarga ko’chib o’tishni ham
              istaydilar. Aslida, buning uchun sayohatlar qilish uchun yer
              yuzida juda ko’p manzillar mavjud. Ehtimol, siz ko’rgan o’lka
              sizning hayotingizning bir qismini topishga intilganingiz
              uchundir. Shunday ekan, do’stlar, siz o’zingizning tug’ilgan
              joyingiz, atrof-muhitingizga mahkam o’rnashishingizga hojat yo’q.
              Baxtingizni qidiring, shaharlar va davlatlarni kashf qiling,
              boshqa xalqlarning turmush tarzi, madaniyati va tarixi bilan
              tanishing! Hayotingizning unutilmas onlarida biz sizning
              yoningizda bo’lamiz, biz bilan sayohat qiling!
            </p>
            <div className="bg-green grid grid-cols-2 col-span-1 text-white p-4 mt-8 rounded-3xl">
              <div className="text-[13px] leading-7">
                <p className="text-[19px] font-bold">Hususiyat :</p>
                <p>Ikki tilli maxsus qo'llanma</p>
                <p>Xususiy transport</p>
                <p>Kirish to'lovlari</p>
                <p>Nonushta va tushlik qutisi</p>
              </div>
              <div className="text-[13px] leading-7 mt-7">
                <p>Ikki tilli maxsus qo'llanma</p>
                <p>Xususiy transport</p>
                <p>Kirish to'lovlari</p>
                <p>Nonushta va tushlik qutisi</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-[19px] font-bold">Kunlik jadval</p>
              <div className="text-[13px] leading-7 text-[#494949] mt-2">
                <p>
                  Malesuada incidunt excepturi proident quo eros? Id interdum
                  praesent magnis, eius cumque? Integer aptent officiis
                  recusandae habitasse iure, quisque culpa!
                </p>
                <p>1-KUN Aeroportda jo'nab ketish va mehmonxonaga kelish</p>
                <p>
                  2-KUN Asosiy muzeylarga tashrif buyuring va tushlik kiradi
                </p>
                <p>3-KUN Tabiiy vohaga ekskursiya va piknik</p>
                <p>4-KUN Aeroportga o'tish va agentlikka qaytish</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <form className="bg-green p-5 text-white rounded-3xl flex flex-col justify-center items-center text-center">
              <p className="text-[20px] font-bold">Habar Yuborish</p>
              <p className="text-[14px] font-semibold mt-3">
                Malesuada incidunt excepturi proident quo eros? Sinterdum
                praesent magnis, eius cumque.
              </p>
              <input
                required
                className="text-black px-4 mt-4 py-3 outline-none rounded-3xl mb-4"
                type="text"
                name=""
                placeholder="enter your name"
              />
              <input
                required
                className="text-black px-4 py-3 outline-none rounded-3xl mb-4"
                type="number"
                name=""
                placeholder="enter your phone number"
              />
              <textarea
                required
                className="w-[239px] h-[100px] outline-none rounded-3xl py-2 px-4 text-black"
                placeholder="enter your message"
              />
              <button className="mt-8 border-white border px-4 py-2 rounded-3xl">
                Habar yuborish
              </button>
            </form>
            <p className="text-[19px] font-bold text-center mt-12">Galareya</p>
            <p className="text-[13px] leading-5 text-center mb-4 text-[#494949] mt-2">
              Quaerat inventore! Vestibulum aenean volutpat gravida. Sagittis,
              euismod perferendis
            </p>
            <Slider {...settings}>
              <div className="ml-5 mt-2">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-3xl"
                  src={img}
                  alt=""
                />
              </div>
              <div className="ml-5 mt-2">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-3xl"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="ml-5 mt-2">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-3xl"
                  src={img3}
                  alt=""
                />
              </div>
              <div className="ml-5 mt-2">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-3xl"
                  src={img4}
                  alt=""
                />
              </div>
              <div className="ml-5 mt-2">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-3xl"
                  src={img5}
                  alt=""
                />
              </div>
            </Slider>
            <iframe
              className="w-full md:h-[150px] h-[150px] md:rounded-3xl rounded-lg border-none mt-[30px]"
              title="This is a unique title"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11988.36848973895!2d69.22814145000001!3d41.3068595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1658514867575!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </GlobalContainer>
    </>
  );
};

export default OuterTurismSlug;
