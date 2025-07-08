import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div>
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavbarMain;
