import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BiDownArrowAlt } from "react-icons/bi";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        Full Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Ramya V
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Passionate full stack developer <br />
        with a love for clean code, clever design, and continuous learning.
      </motion.p>
      <a
        href="../../public/images/ramya-resume.pdf"
        download
        className="mx-auto md:mx-0 md:self-start lg:mx-0 lg:self-start rounded-full border border-cyan text-white font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 px-6 py-2 flex items-center"
      >
        Download Resume
        <BiDownArrowAlt className="ml-2 text-2xl" />
      </a>
    </div>
  );
};

export default HeroText;
