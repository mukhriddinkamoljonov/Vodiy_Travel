import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Modal from "../../Components/Modal";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";

function InnerSlug() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

const [active, setactive] = useState(false);

  const { slug } = useParams();
  return (
    <>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>BUYURTMA BERISH</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <GlobalContainer>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 pb-[50px] pt-[80px]">
          {active ? <Modal/> : ''}
          <div className="bg-[#f8f8f8] rounded-xl p-8">
            <p className="text-[22px] flex items-center justify-center text-white bg-green w-full rounded-sm">
              Ma'lumot
            </p>
            <p className="flex justify-between items-center text-[20px] mt-8">
              <span className="font-semibold text-[#474747]">Narx:</span>
              <span className="text-[19px] text-[#a7a4a4]">
                10 910 000 so'm / $1000
              </span>
            </p>
            <hr className="text-[#a7a4a4] mt-1" />
            <p className="flex justify-between items-center text-[20px] mt-8">
              <span className="font-semibold text-[#474747]">Manzil:</span>
              <span className="text-[19px] text-[#a7a4a4]">{slug}</span>
            </p>
            <hr className="text-[#a7a4a4] mt-1" />
            <p className="flex justify-between items-center text-[20px] mt-8">
              <span className="font-semibold text-[#474747]">Kun</span>
              <span className="text-[19px] text-[#a7a4a4]">10 kun</span>
            </p>
            <hr className="text-[#a7a4a4] mt-1" />
          </div>
        </div>
      </GlobalContainer>
    </>
  );
}

export default InnerSlug;
