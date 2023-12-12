import React from "react";
import { logo, hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-[64px] py-[40px] w-full">
      <nav className="flex max-container justify-between items-center">
        <a href="logo">
          <img src={logo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-end gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="text-white">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hambergur"
            width={32}
            height={32}
            className="items-end justify-end"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
