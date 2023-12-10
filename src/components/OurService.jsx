import React from "react";
import Button from "./Button";

const OurService = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-[320px] min-w-[300px] py-10 px-10 bg-lightBlue rounded-md">
      <div className="flex h-11 w-11 justify-center items-center rounded-full bg-slate-100">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="mt-5 font-poppins text-2xl leading-normal font-bold text-white">
        {label}
      </h3>
      <p className="leading-normal text-white text-lg break-words xl:max-w-[270px] sm:w-full mt-5">
        {subtext}
      </p>
      <div className="justify-center items-center flex mt-5 ">
        <Button />
      </div>
    </div>
  );
};

export default OurService;
