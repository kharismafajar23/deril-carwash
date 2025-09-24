import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import React from "react";
import { BiLogoWhatsapp, BiSolidXCircle } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-y-0" : "translate-y-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Menu */}
      <div
        className={`text-white ${navOpen} fixed justify-center items-center flex flex-col w-full transform transition-all duration-500 delay-300 h-[80%] sm:h-[60%] bg-primary space-y-3 top-0 px-8 py-4 z-[1005]`}
      >
        {navLinks.map((link) => {
          return (
            <ScrollLink
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              activeClass="text-primary bg-white shadow-lg shadow-amber-50/50"
              className="text-black text-center transition-all duration-300 nav-link w-min text-nowrap rounded-sm py-2 px-3"
            >
              <span>{link.label}</span>
            </ScrollLink>
          );
        })}
        <Link
          href="http://wa.me/6285799258195"
          target="_blank"
          className="px-3 py-2 bg-black text-white rounded-sm flex flex-nowrap items-center justify-center"
        >
          <BiLogoWhatsapp size={20} className="me-1" /> Chat Sekarang
        </Link>
        {/* Close Icon */}
        <BiSolidXCircle
          onClick={closeNav}
          className="absolute top-[10px] right-[10px] h-8 w-8 text-black"
        />
      </div>
    </div>
  );
};

export default MobileNav;
