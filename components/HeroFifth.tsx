import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroFifth = () => {
  return (
    <div className="bg-nacho bg-cover bg-no-repeat  w-screen h-screen flex flex-col text-right p-48 pl-60 ">
      <div className=" mt-44 gap-y-10 flex flex-col">
        <div className="font-bold text-6xl drop-shadow-xl  text-black ">
          IGNACIO VARGA
        </div>
        <h1 className="raleway text-3xl drop-shadow-xl text-right font-normal text-black">
          "Nacho" Varga is a fictional character in the
          <br /> television series Better Call Saul, prequel of
          <br /> Breaking Bad. He's portrayed by Michael Mando.
          <br /> Nacho is an intelligent, ambitious career criminal.
          <br /> He is a high-level enforcer for the Juárez Cartel.
          <br /> He is also a close associate of Saul Goodman.
        </h1>
        <HeroLearnMoreLinks
          text={"https://breakingbad.fandom.com/wiki/Nacho_Varga"}
        />
      </div>
    </div>
  );
};

export default HeroFifth;
