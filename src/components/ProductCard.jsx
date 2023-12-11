import React from "react";

const ProductCard = ({ price, imgURL, description, piece }) => {
  return (
    <div className="flex-1 md:max-w-[320px] sm:max-w-[320px] min-w-[300px] py-10 px-4 bg-slate-200 rounded-md">
      <div className="flex justify-center items-center">
        <img src={imgURL} alt="image" height={250} className=" h-[250px] " />
      </div>
      <div className="px-4 pt-[10px] text-lg">
        <p className="text-black">Description: {description}</p>
        <h1 className="text-black">Price: {price}</h1>
        <p className="text-black">Stock: {piece}</p>
      </div>
    </div>
  );
};

export default ProductCard;
