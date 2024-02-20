import React from "react";
import NavBar from "./NavBar";

const HeroFirst = () => {
  return (
    <div className="bg-black sm:bg-jimmy bg-cover bg-no-repeat flex flex-col w-screen h-screen items-center">
      <NavBar />
      <div className="flex-grow flex items-center justify-center">
        <div className="font-roboto_flex font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl text-hero">
          SAUL GOODMAN
        </div>
      </div>
    </div>
  );
};

export default HeroFirst;
