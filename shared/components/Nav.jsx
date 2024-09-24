"use client";

import React from "react";
import { headerLogo } from "./../../public/assets/images";
import { burger, close } from "./../../public/assets/icons";
import Image from "next/image";

const Nav = ({ isFixed, links, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className={`${
        isFixed
          ? "sticky bg-white top-0 py-[5px] max-md:relative max-md:bg-primary max-md:py-[16px]"
          : "relative py-[16px] pt-[32px] max-sm:pt-[16px]"
      } z-900 w-full  bg-primary  mb-[100px] max-md:mb-[80px] transition ease-in-out duration-400 max-md:bg-transparent max-md:z-1000 max-sm:mb-[48px]`}
    >
      <nav className="flex justify-between items-center px-[30px] max-md:px-[10px] max-container max-sm:px-0 ">
        <a href="/">
          <Image
            src={headerLogo}
            alt="logo"
            className={`border-none max-sm:w-[113px] `}
          />
        </a>
        <ul className="flex flex-between justify-center items-center gap-16 max-lg:hidden ">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${
                  item.href === `#${activeSection}` && "text-orange"
                } font-onest leading-normal text-sm text-black hover:text-orange`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src={burger}
            alt="hamburger icon"
            onClick={() => setIsMenuOpen(true)}
            className="w-[44px] max-sm:w-[32px]"
          />
        </div>
      </nav>
      <div
        className={`w-[283px] hidden absolute top-0 right-0 h-[1130px] z-9999 bg-white ${
          isMenuOpen ? "max-md:flex max-sm:w-full" : ""
        } } max-md:flex-col max-md:justify-center max-md:items-start`}
      >
        <ul className="flex flex-col justify-center items-start gap-[20px] ml-[32px]">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${
                  item.href === `#${activeSection}` && "text-orange"
                } font-onest leading-normal text-sm text-black hover:text-orange`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Image
          src={close}
          alt="close icon"
          onClick={() => setIsMenuOpen(false)}
          className="w-[44px] absolute max-md:top-[18px] max-md:right-[18px] max-ms:top-[16px] max-ms:right-[16px] max-sm:w-[32px]"
        />
      </div>
    </header>
  );
};

export default Nav;
