import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import image1 from "../assets/Carousel1.png";
// import image2 from "../assets/Carousel2.png";
// import image3 from "../assets/Carousel3.png";
// import image4 from "../assets/Carousel4.png";

import { carousel2, carousel3, carousel4, carousel5 } from "../assets/images";

function Hero() {
  const [displayedImage, setDisplayedImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const allImage = [carousel2, carousel3, carousel4, carousel5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setDisplayedImage((prevDisplayedImage) =>
          prevDisplayedImage >= 3 ? 0 : prevDisplayedImage + 1
        );
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handlePrevClick = () => {
    setDisplayedImage((prevDisplayedImage) =>
      prevDisplayedImage <= 0 ? 3 : prevDisplayedImage - 1
    );
  };

  const handleNextClick = () => {
    setDisplayedImage((prevDisplayedImage) =>
      prevDisplayedImage >= 3 ? 0 : prevDisplayedImage + 1
    );
  };

  return (
    <div>
      <img
        className="w-full mb-[50px]"
        src={allImage[displayedImage]}
        alt="Carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div
        className="absolute left-5 top-[25%] text-2xl rounded-full bg-black text-white cursor-pointer"
        onClick={handlePrevClick}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="absolute right-5 top-[25%] text-2xl rounded-full bg-black text-white cursor-pointer"
        onClick={handleNextClick}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Hero;
