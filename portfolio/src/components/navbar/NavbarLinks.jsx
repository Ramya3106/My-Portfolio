import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ setMenuOpen, setCurrentSection }) => {
  return (
    <ul className="flex gap-6 text-white font-bold items-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-xl sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <button
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500 bg-transparent border-none outline-none"
              onClick={() => {
                setCurrentSection(link.section);
                setMenuOpen && setMenuOpen(false);
              }}
            >
              {link.link}
            </button>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
