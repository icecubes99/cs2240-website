import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroSixth = () => {
  return (
    <div className="bg-howard bg-cover bg-no-repeat w-screen lg:h-screen h-full flex flex-wrap flex-col p-48 pt-80 pl-52 gap-y-10 text-black">
      <div className="flex flex-grow w-auto h-auto border-red-200 md:hidden justify-center ">
        <img src="/howard-hamlin.png" alt="" />
      </div>
      <div className="font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl drop-shadow-xl">
        HOWARD HAMLIN
      </div>
      <h1 className="raleway lg:text-3xl md:text-xl sm:text-lg text-base drop-shadow-xl text-justify sm:text-left font-normal md:whitespace-normal">
        Howard Hamlin is a senior partner at Hamlin, Hamlin & McGill, a law firm
        he co-founded with Chuck McGill. He is also the brother of Chuck McGill
        and the legal nemesis of Jimmy McGill. He is portrayed by Patrick
        Fabian. Howard is a senior partner at HHM.
      </h1>
      <HeroLearnMoreLinks text="https://breakingbad.fandom.com/wiki/Howard_Hamlin" />
    </div>
  );
};

export default HeroSixth;
