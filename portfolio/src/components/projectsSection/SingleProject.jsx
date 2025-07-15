import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <h2>{year}</h2>
        <a>
          view <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default SingleProject;
