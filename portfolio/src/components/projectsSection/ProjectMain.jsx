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
    link: "#",
  },
  {
    name: "Estate",
    year: "Aug2024",
    align: "left",
    image: "../../public/images/project-img4.png",
    link: "#",
  },
  {
    name: "Book Store",
    year: "Jan2025",
    align: "right",
    image: "../../public/images/project-img2.png",
    link: "#",
  },
  {
    name: "Netflix",
    year: "March2025",
    align: "left",
    image: "../../public/images/project-img7.png",
    link: "#",
  },
  {
    name: "Skill Mine",
    year: "June2025",
    align: "right",
    image: "../../public/images/project-img3.png",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div>
      <ProjectText />
      <div>
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
