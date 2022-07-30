import React from "react";

const Modal = (props) => {
  return (
    <div id="close" className="fixed top-0 flex justify-center items-center !z-[9999999] bg-[#333] !w-full !h-screen">
      <form className="px-4 pb-4 pt-4 bg-darkGreen rounded-md max-w-xl">
        <div className="flex items-center justify-end mb-2 box-content">
          <svg onClick={props.close}
            className="cursor-pointer rounded-full border-[1px] hover:border-green p-1 box-content"
            aria-label="Close"
            color="#ffffff"
            fill="#ffffff"
            height="20"
            role="img"
            viewBox="0 0 24 24"
            width="20"
          >
            <polyline
              fill="none"
              points="20.643 3.357 12 12 3.353 20.647"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></polyline>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              x1="20.649"
              x2="3.354"
              y1="20.649"
              y2="3.354"
            ></line>
          </svg>
        </div>
        <div className="flex justify-center gap-4">
          <input
            className="text-[#333] font-semibold outline-none text-[15px] px-3 py-4"
            type="text"
            placeholder="enter your name"
          />
          <input
            className="text-[#333] font-semibold outline-none text-[15px] px-3 py-4"
            type="text"
            placeholder="enter your last name"
          />
        </div>
        <div className="text-[#333] font-semibold outline-none flex flex-col gap-4 mt-4">
          <input
            className="text-[#333] font-semibold outline-none text-[15px] !w-full px-3 py-4"
            type="text"
            placeholder="enter your email"
          />
          <input
            className="text-[15px] !w-full px-3 py-4 text-[#333] font-semibold outline-none"
            type="number"
            placeholder="phone number"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-[15px] mt-4 border border-white px-5 py-4 rounded-xl hover:text-[#cfcece]"
          >
            Buyurtma qilish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
