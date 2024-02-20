import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroSecond = () => {
  return (
    <div className="bg-saul bg-cover bg-no-repeat w-screen lg:h-screen h-full flex flex-wrap flex-col p-48 pt-80 pl-52 gap-y-10 text-white ">
      <div className="flex flex-grow w-auto h-auto border-red-200 md:hidden justify-center ">
        <img src="/jimmy-mcgill.png" alt="A picture of James Morgan Mcgill" />
      </div>

      <div className="font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl drop-shadow-xl ">
        JAMES M. MCGILL
      </div>
      <h1 className="raleway lg:text-3xl md:text-xl sm:text-lg text-base drop-shadow-xl text-justify sm:text-left font-normal md:whitespace-normal">
        James Morgan "Jimmy" McGill, better known by his professional alias and
        business moniker Saul Goodman and later Gene Takavic, is an American
        criminal defense lawyer, scam artist, and a former con artist who
        established his law practice in Albuquerque, New Mexico.
      </h1>

      <HeroLearnMoreLinks text="https://breakingbad.fandom.com/wiki/Jimmy_McGill" />
    </div>
  );
};

export default HeroSecond;
