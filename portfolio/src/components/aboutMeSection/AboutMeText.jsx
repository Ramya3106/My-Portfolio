import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex felx-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan md-10">About Me</h2>
      <p className="">
        I’m a passionate web developer who enjoys solving real-world problems
        through clean, efficient code. With hands-on experience in real-time
        projects, I bring practical solutions to complex challenges. Beyond
        coding, I’m committed to continuous learning and staying updated with
        the latest technologies. I also believe in sharing knowledge to inspire
        and help others achieve their goals. Whether it’s building user-friendly
        websites or collaborating on impactful tech solutions, I’m always
        excited to grow and contribute.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
