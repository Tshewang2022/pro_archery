import React from "react";
import { demos } from "../constants";

const Footer = () => {
  return (
    <div className="flex-1 flex flex-wrap justify-center items-center gap-4">
      {demos.map((demo) => (
        <div className="text-white">{demo.titles}</div>
      ))}
    </div>
  );
};

export default Footer;
