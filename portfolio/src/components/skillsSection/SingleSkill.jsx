import React from "react";

const SingleSkill = ({ imgsvg, text }) => {
  return (
    <div>
      <div>
        <div>{imgsvg}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
