import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    internship: "Front-End Developer",
    company: "Griffendor",
    date: 2025,
    responsibilities: [
      "Participating in large scale application",
      "Working on the performance of web applications",
      "Collaborated with a team to develop real-time project features and fix bugs",
      "Generating new ideas for better user experience",
    ],
  },
  {
    internship: "Front-End Developer",
    company: "System Tron",
    date: 2025,
    responsibilities: [
      "Gained hands-on experience building responsive and dynamic web applications",
      "Improved my front-end skills using HTML, CSS, JavaScript, and React",
      "Collaborated with a team to develop real-time project features and fix bugs",
    ],
  },
  {
    internship: "Front-End Developer",
    company: "Oasis Infobyte",
    date: 2025,
    responsibilities: [
      "Enhanced my web development skills by working on real-world mini projects",
      "Learned to build user-friendly interfaces using React js",
      "Gained practical experience in designing and deploying responsive websites",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;
