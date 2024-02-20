import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroFifth = () => {
  return (
    <div className="bg-nacho bg-cover bg-no-repeat w-screen lg:h-screen h-full flex flex-col  text-right p-48 pt-80 pl-60 gap-y-10 text-indigo-600 ">
      <div className="flex flex-grow w-auto h-auto border-red-200 md:hidden justify-center ">
        <img src="/ignacio-vargas.png" alt="" />
      </div>

      <div className="font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl drop-shadow-xl  ">
        IGNACIO VARGA
      </div>
      <h1 className="raleway lg:text-3xl md:text-xl sm:text-lg drop-shadow-xl text-justify sm:text-right whitespace-normal font-normal">
        "Nacho" Varga is a fictional character in the television series Better
        Call Saul, prequel of Breaking Bad. He's portrayed by Michael Mando.
        Nacho is an intelligent, ambitious career criminal. He is a high-level
        enforcer for the Juárez Cartel. He is also a close associate of Saul
        Goodman.
      </h1>
      <HeroLearnMoreLinks
        text={"https://breakingbad.fandom.com/wiki/Nacho_Varga"}
      />
    </div>
  );
};

export default HeroFifth;
