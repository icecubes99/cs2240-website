import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroFourth = () => {
  return (
    <div className="bg-mike bg-cover bg-no-repeat w-screen h-screen flex flex-col p-48 pt-80 pl-50 gap-y-10 ">
      <div className="font-bold text-6xl drop-shadow-xl  text-white ">
        MICHAEL EHRMANTRAUT
      </div>
      <h1 className="raleway text-3xl drop-shadow-xl font-normal text-white">
        Michael Ehrmantraut is a fictional character in
        <br /> Breaking Bad and its prequel Better Call Saul,
        <br /> played by Jonathan Banks. A former Philadelphia
        <br /> police officer, Mike is a professional "fixer"
        <br /> who worked for Gus Fring.
        <br /> He is also the grandfather of Kaylee Ehrmantraut.
      </h1>
      <div className="text-white">
        <HeroLearnMoreLinks text="https://breakingbad.fandom.com/wiki/Mike_Ehrmantraut" />
      </div>
    </div>
  );
};

export default HeroFourth;
