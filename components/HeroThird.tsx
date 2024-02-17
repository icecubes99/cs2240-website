import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroThird = () => {
  return (
    <div className="bg-kim bg-cover bg-no-repeat w-screen h-screen flex flex-col text-right p-48 pl-60 ">
      <div className=" mt-44 gap-y-10 flex flex-col">
        <div className="font-bold text-6xl drop-shadow-xl  text-white ">
          KIM WEXLER
        </div>
        <h1 className="raleway text-3xl drop-shadow-xl text-right font-normal text-white">
          Kimberly Wexler is a lawyer who is a
          <br /> senior partner at Hamlin, Hamlin & McGill.
          <br /> She is also the girlfriend of Jimmy McGill.
          <br /> She is a main character in the Breaking Bad
          <br /> spin-off Better Call Saul.
          <br /> She is portrayed by Rhea Seehorn.
        </h1>
        <div className="text-white">
          <HeroLearnMoreLinks
            text={"https://breakingbad.fandom.com/wiki/Kim_Wexler"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroThird;
