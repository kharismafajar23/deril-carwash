"use client";

import React, { useState } from "react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const ResponsifNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => {
    setShowNav(true);
  };
  const handleNavHide = () => {
    setShowNav(false);
  };

  return (
    <header className="sticky top-0 z-[500]">
      <MainNav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />
    </header>
  );
};

export default ResponsifNav;
