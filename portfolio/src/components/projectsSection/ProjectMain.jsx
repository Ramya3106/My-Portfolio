import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Travel",
    year: "Nov2023",
    align: "right",
    image: "../../public/images/project-img6.png",
    githubLink: "https://github.com/Ramya3106/Travel-and-Tour-website",
  },
  {
    name: "Ice Parlour",
    year: "jan2024",
    align: "left",
    image: "../../public/images/project-img10.png",
    githubLink: "https://github.com/Ramya3106/Ice-cream-parlour-website",
  },
  {
    name: "Coffee Shop",
    year: "May2024",
    align: "right",
    image: "../../public/images/project-img12.png",
    githubLink: "https://github.com/Ramya3106/Coffee-shop-website",
  },
  {
    name: "Estate",
    year: "Aug2024",
    align: "left",
    image: "../../public/images/project-img4.png",
    githubLink: "https://github.com/Ramya3106/Real-Estate-Website",
  },
  {
    name: "Book Store",
    year: "Jan2025",
    align: "right",
    image: "../../public/images/project-img2.png",
    githubLink: "https://github.com/Ramya3106/Book-Store-Website",
  },
  {
    name: "Netflix",
    year: "March2025",
    align: "left",
    image: "../../public/images/project-img7.png",
    githubLink: "https://github.com/Ramya3106/Netflix-clone-Website",
  },
  {
    name: "Skill Mine",
    year: "June2025",
    align: "right",
    image: "../../public/images/project-img3.png",
    githubLink:
      "https://github.com/Ramya3106/Multipage-Learning-Management-System-Website",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px]mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              githubLink={item.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
