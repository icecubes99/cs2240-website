import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroFourth = () => {
  return (
    <div className="bg-mike bg-cover bg-no-repeat w-screen lg:h-screen h-full flex flex-wrap flex-col p-48 pt-80 pl-52 gap-y-10 text-white">
      <div className="flex flex-grow w-auto h-auto border-red-200 md:hidden justify-center ">
        <img src="/mike-ehrmentraut.png" alt="" />
      </div>

      <div className="font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl drop-shadow-xl ">
        MICHAEL EHRMANTRAUT
      </div>
      <h1 className="raleway lg:text-3xl md:text-xl sm:text-lg text-base drop-shadow-xl text-justify sm:text-left font-normal md:whitespace-normal">
        Michael Ehrmantraut is a fictional character in Breaking Bad and its
        prequel Better Call Saul, played by Jonathan Banks. A former
        Philadelphia police officer, Mike is a professional "fixer" who worked
        for Gus Fring. He is also the grandfather of Kaylee Ehrmantraut.
      </h1>

      <HeroLearnMoreLinks text="https://breakingbad.fandom.com/wiki/Mike_Ehrmantraut" />
    </div>
  );
};

export default HeroFourth;
