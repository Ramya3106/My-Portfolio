import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Travel",
    year: "Nov2023",
    align: "right",
    image: "../../publicc/images/project-img6.png",
    link: "#",
  },
  {
    name: "Ice Parlour",
    year: "jan2024",
    align: "left",
    image: "../../public/images/project-img10.png",
    link: "#",
  },
  {
    name: "Coffee Shop",
    year: "May2024",
    align: "right",
    image: "../../public/images/project-img12.png",
    link: "",
  },
  {
    name: "",
    year: "",
    align: "",
    image: "",
    link: "",
  },
  {
    name: "",
    year: "",
    align: "",
    image: "",
    link: "",
  },
  {
    name: "",
    year: "",
    align: "",
    image: "",
    link: "",
  },
  {
    name: "",
    year: "",
    align: "",
    image: "",
    link: "",
  },
];

const ProjectMain = () => {
  return (
    <div>
      <ProjectText />
      <div>
        <SingleProject />
      </div>
    </div>
  );
};

export default ProjectMain;
