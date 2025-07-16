import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import SingleSkill from "./SingleSkill";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgsvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
