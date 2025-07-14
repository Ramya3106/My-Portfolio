import React from "react";

const SingleExperience = ({ experience }) => {
  return (
    <div>
      <p>{experience.job}</p>
      <p>{experience.company}</p>
      <p>{experience.date}</p>
      <ul>{experience.responsibilities}</ul>
    </div>
  );
};

export default SingleExperience;
