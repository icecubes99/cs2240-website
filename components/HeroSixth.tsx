import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroSixth = () => {
  return (
    <div className="bg-howard bg-cover bg-no-repeat w-screen h-screen flex flex-col p-48 pt-72 pl-52 gap-y-10 ">
      <div className="font-bold text-6xl drop-shadow-xl  text-black ">
        HOWARD HAMLIN
      </div>
      <h1 className="raleway text-3xl drop-shadow-xl font-normal text-black">
        Howard Hamlin is a senior partner at Hamlin,
        <br /> Hamlin & McGill, a law firm he co-founded with
        <br /> Chuck McGill. He is also the brother of Chuck
        <br /> McGill and the legal nemesis of Jimmy McGill.
        <br /> He is portrayed by Patrick Fabian.
        <br /> Howard is a senior partner at HHM.
      </h1>
      <HeroLearnMoreLinks text="https://breakingbad.fandom.com/wiki/Howard_Hamlin" />
    </div>
  );
};

export default HeroSixth;
