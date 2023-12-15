import React from "react";
import { logo } from "../assets/icons";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer
      className="flex flex-wrap justify-start items-start max-ls:flex-col gap-4 py-10"
      id="contact"
    >
      <div className="flex flex-col justify-start items-start px-8">
        <img src={logo} alt="logo" width={124} height={32} />
        <p className="text-white sm:max-w-sm">
          Get your desire bow and arrow at the comparative prices with high
          quality. Find your perfect comfort in our store.
        </p>
        <div className="flex justify-center items-center mt-5 gap-4">
          {socialMedia.map((media) => (
            <div className="flex justify-center items-center h-12 w-12 text-white rounded-full bg-white">
              <img src={media.src} alt={media.alt} height={24} width={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between items-center gap-10 px-10">
        {footerLinks.map((footer) => (
          <div key={footer}>
            <h4 className="leading-normal text-white font-sans text-xl mb-6">
              {footer.title}
            </h4>
            <ul>
              {footer.links.map((link) => (
                <li className="mt-3 font-montserrat text-base text-white leading-normal">
                  <a href="/">{link.name} </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
