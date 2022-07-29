import React from "react";

const Modal = (props) => {
	return (
		<div className="bg-darkGreen justify-center items-center text-white p-4 rounded-lg">
			<button onClick={props.close} className="flex items-center justify-end w-full">
				<svg
					aria-label="Close"
					color="#fff"
					fill="#262626"
					height="18"
					role="img"
					viewBox="0 0 24 24"
					width="18"
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
			</button>
			<form className="flex flex-col mt-4">
				<label className="mt-3 mb-1 text-[18px]">Your name</label>
				<input className="px-2 py-2 rounded-md text-black outline-none" type="text" placeholder="enter your name" />
				<label className="mt-3 mb-1 text-[18px]">Your last name</label>
				<input className="px-2 py-2 rounded-md text-black outline-none" type="text" placeholder="enter your last name" />
				<label className="mt-3 mb-1 text-[18px]">Your number</label>
				<input className="px-2 py-2 rounded-md text-black outline-none" type="number" placeholder="enter your number" />
			</form>
			<button className="border-white mt-5 rounded-md border px-5 py-2" type="submit">send</button>
		</div>
	);
};

export default Modal;
