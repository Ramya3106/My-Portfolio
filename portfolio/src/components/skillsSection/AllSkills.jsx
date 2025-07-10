import React from "react";
import { FaHtml5 } from "react-icons/fa";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: "FaHtml5",
  },
  {
    skill: "CSS",
    icon: "FaHtml5",
  },
  {
    skill: "Javascript",
    icon: "FaHtml5",
  },
  {
    skill: "ReactJs",
    icon: "FaHtml5",
  },
  {
    skill: "TailwindCSS",
    icon: "FaHtml5",
  },
  {
    skill: "NodeJs",
    icon: "FaHtml5",
  },
  {
    skill: "ExpressJS",
    icon: "FaHtml5",
  },
  {
    skill: "MangoDB",
    icon: "FaHtml5",
  },
];

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((item, index) => {
        return (
          <SingleSkill key={index} text={item.text} imgsvg={<item.icon />} />
        );
      })}
    </div>
  );
};

export default AllSkills;
