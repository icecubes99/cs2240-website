import React from "react";
import HeroLearnMoreLinks from "./HeroLearnMoreLinks";

const HeroThird = () => {
  return (
    <div className="bg-kim bg-cover bg-no-repeat w-screen lg:h-screen h-full flex flex-col flex-wrap text-right p-48 pt-80 pl-60 gap-y-10 text-white">
      <div className="flex flex-grow w-auto h-auto border-red-200 md:hidden justify-center ">
        <img src="/kim-wexler.png" alt="" />
      </div>

      <div className="font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl drop-shadow-xl ">
        KIM WEXLER
      </div>
      <h1 className="raleway lg:text-3xl md:text-xl sm:text-lg drop-shadow-xl text-justify sm:text-right whitespace-normal font-normal">
        Kimberly Wexler is a lawyer who is a senior partner at Hamlin, Hamlin &
        McGill. She is also the girlfriend of Jimmy McGill. She is a main
        character in the Breaking Bad spin-off Better Call Saul. She is
        portrayed by Rhea Seehorn. Kim is a lawyer who is a senior partner at
        the law firm of Hamlin, Hamlin & McGill.
      </h1>

      <HeroLearnMoreLinks
        text={"https://breakingbad.fandom.com/wiki/Kim_Wexler"}
      />
    </div>
  );
};

export default HeroThird;
