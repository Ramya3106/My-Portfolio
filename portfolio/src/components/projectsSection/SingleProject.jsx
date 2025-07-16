import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, githubLink }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <div
          className={`text-lg flex gap-2 items-center text-cyan sm:justify-self-center ${
            align === "left"
              ? "md:justify-self-center"
              : "md:justify-self-start"
          }`}
        >
          <span>view</span>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-cyan text-cyan hover:bg-orange hover:text-white transition-all duration-500 cursor-pointer"
            title="View on GitHub"
          >
            <BiSolidRightTopArrowCircle size={22} />
          </a>
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
