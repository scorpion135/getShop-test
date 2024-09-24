import React from "react";

const Button = ({ label, backgroundColor, textColor }) => {
  return (
    <button
      className={`flex w-[210px] h-[48px] text-sm justify-center items-center px-7 py-4 border ${
        backgroundColor === "black"
          ? `bg-${backgroundColor} hover:bg-gray1 hover:text-white max-md:w-[210px] max-md:h-[48px]`
          : "bg-orange hover:bg-darkOrange hover:text-white active:bg-gray1 active:text-gray1"
      } rounded-xl text-white "transition duration-400 ease-in-out"} max-md:w-full`}
    >
      {label}
    </button>
  );
};

export default Button;
