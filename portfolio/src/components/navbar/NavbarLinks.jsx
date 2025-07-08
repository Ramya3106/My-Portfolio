import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>{link.link}</li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
