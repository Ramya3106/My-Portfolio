import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import SubHeroSection from "./SubHeroSection";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="sm:mt-16 md:mt-20 lg:mt-0 w-full flex justify-center">
            <HeroPic />
          </div>
        </div>
      </div>
      {/* Show SubHeroSection only on small and medium screens below the photo */}
      <div className="lg:hidden block mt-20">
        <SubHeroSection />
      </div>
    </div>
  );
};

export default HeroMain;
