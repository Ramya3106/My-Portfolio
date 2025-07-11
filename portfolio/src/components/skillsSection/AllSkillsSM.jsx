import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJs",
    icon: FaReact,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "NodeJs",
    icon: IoLogoNodejs,
  },
  {
    skill: "ExpressJS",
    icon: IoLogoJavascript,
  },
  {
    skill: "MangoDB",
    icon: SiMongodb,
  },
];

const AllSkillsSM = () => {
  return (
    <div>
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
