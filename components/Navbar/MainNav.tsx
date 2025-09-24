"use client";

import { navLinks } from "@/constant/Constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiLogoWhatsapp, BiMenu } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  openNav: () => void;
};

const MainNav = ({ openNav }: Props) => {
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavShadow(true);
      else setNavShadow(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`w-full bg-white ${
        navShadow ? "shadow" : ""
      } py-4 lg:py-6 sticky top-0 z-50`}
    >
      <div className="container flex flex-row items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/demangan-carwash-black.png"
          alt="Logo Demangan Carwash"
          width={166}
          height={48}
          className="header_logo"
        />

        {/* Menu */}
        <div className="hidden lg:flex gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className="list-none">
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                activeClass="text-primary font-bold"
                className="cursor-pointer hover:text-primary transition-all"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </div>

        {/* Right section */}
        <div className="flex gap-10 items-center">
          {/* Btn Kontak Kami */}
          <a
            href="http://wa.me/6285799258195"
            target="_blank"
            className="btn btn-primary hidden lg:flex items-center gap-2 font-bold"
          >
            <BiLogoWhatsapp size="1.4rem" />
            +6281 1295 1180
          </a>
          {/* Mobile menu button */}
          <BiMenu
            onClick={openNav}
            className="text-3xl lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
