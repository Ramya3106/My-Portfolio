import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="flex md:flex-row sm:flex-col justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />;
            {index < 2 ? (
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
