import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    internship: "Front-End Developer",
    company: "Griffendor",
    date: 2022,
    responsibilities: [
      "Participating in large scale application",
      "Working on the performance of web applications",
      "Generating new ideas for better user experience",
    ],
  },
  {
    internship: "Front-End Developer",
    company: "System Tron",
    date: 2022,
    responsibilities: [
      "Participating in large scale application",
      "Working on the performance of web applications",
      "Generating new ideas for better user experience",
    ],
  },
  {
    internship: "Front-End Developer",
    company: "Oasis Infobyte",
    date: 2022,
    responsibilities: [
      "Participating in large scale application",
      "Working on the performance of web applications",
      "Generating new ideas for better user experience",
    ],
  },
];
const AllExperience = () => {
  return (
    <div>
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
