import React from "react";
import { useParams } from "react-router-dom";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";

function InnerSlug() {
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
          <form>
            <div className="bg-[#f8f8f8] rounded-xl p-8">
              <div className="flex justify-start items-center gap-4">
                <p className="md:text-[25px] text-[14px] flex items-center justify-center text-white bg-green md:w-12 md:h-12 h-8 w-8 p-3 rounded-full">
                  1
                </p>
                <p className="uppercase md:text-[22px] text-[14px] font-semibold text-darkGreen">
                  sIZNING MA'LUMOTLARiNGIZ
                </p>
              </div>
              <div className="w-full flex justify-between gap-4 mt-6">
                <input
                  className="md:h-12 h-8 rounded-xl md:text-base text-[14px] pl-4 w-full outline-none border-green border"
                  maxLength={100}
                  required
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="md:h-12 h-8 rounded-xl md:text-base text-[14px] pl-4 w-full outline-none border-green border"
                  maxLength={100}
                  required
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <textarea
                required
                className="rounded-xl md:h-[257px] h-[100px] w-full pl-4 pt-4 outline-none border-green border mt-6 resize-none"
                maxLength={500}
                cols="30"
                rows="10"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="bg-green py-3 px-4 rounded-xl mt-8 flex items-center justify-center text-white">
              BUYURTMA BERISH
            </button>
          </form>
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
