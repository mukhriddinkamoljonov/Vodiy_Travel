import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";

const SecondCard = (props) => {
  const navigate = useNavigate();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-12 md:grid-rows-1 rounded-xl lg:h-64 md:h-64 mb-10">
      <div className="col-span-5 rounded-xl border-r-5 border-blue-400">
        <img
          src={props.img}
          alt="There should be a img here"
          className="md:rounded-tl-xl md:rounded-tr-none rounded-t-xl md:rounded-bl-xl w-full h-full object-cover"
        />
      </div>
      <div className="col-span-4 flex items-center justify-center flex-col py-5 px-4 md:text-left text-center bg-[#e8ecf5]">
        <h1 className="text-[#1e635c] text-[18px] font-extrabold md:text-[25px]">
          {props.title}
        </h1>
        <p className="mt-4 text-[#626672] md:text-base text-[14px] md:text-left text-center font-medium">
          {props.description}
        </p>
        <p className="shadow-lg mt-7 md:text-[13px] text-[11px] bg-[#fff] px-3 py-1 rounded-full text-[#535252]">
          {props.day} | {props.location}
        </p>
      </div>
      <div className="col-span-3 md:rounded-tr-xl md:rounded-bl-none rounded-b-xl px-2 py-4 text-center rounded-br-xl flex items-center justify-center flex-col bg-green">
        <ReactStars size={22} onChange={ratingChanged} />
        <p className="text-[#fff] text-[20px] font-bold mt-2">{props.price}</p>
        <p className="text-[#fff] text-sm font-bold">/ {props.forHowMany}</p>
        <button
          onClick={() => {
            navigate(`/innerTurizm/${props.link}`);
          }}
          className="mt-4 md:border-2 border-[1px] border-[#fff] font-semibold md:px-4 md:py-2 px-3 py-1 md:text-base text-[14px] rounded-xl hover:text-[#e7e3e3] text-[#fff]"
        >
          zakaz qilish
        </button>
      </div>
    </div>
  );
};

export default SecondCard;
