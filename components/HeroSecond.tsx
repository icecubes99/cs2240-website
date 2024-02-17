import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroSecond = () => {
  return (
    <div className="bg-saul bg-cover bg-no-repeat w-screen h-screen flex flex-col p-48 pt-80 pl-52 gap-y-10 ">
      <div className="font-bold text-6xl drop-shadow-xl  text-white ">
        JAMES MORGAN MCGILL
      </div>
      <h1 className="raleway text-3xl drop-shadow-xl font-normal text-white">
        James Morgan "Jimmy" McGill, better known
        <br /> by his professional alias and business moniker
        <br /> Saul Goodman and later Gene Takavic, is an
        <br /> American criminal defense lawyer, scam artist, <br />
        and a former con artist who established <br />
        his law practice in Albuquerque, New Mexico.
      </h1>
      <div className="text-white">
        <HeroLearnMoreLinks text="https://breakingbad.fandom.com/wiki/Jimmy_McGill" />
      </div>
    </div>
  );
};

export default HeroSecond;
