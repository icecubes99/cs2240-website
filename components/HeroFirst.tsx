import React from "react";
import NavBar from "./NavBar";

const HeroFirst = () => {
  return (
    <div className="bg-jimmy bg-cover bg-no-repeat w-screen h-screen">
      <NavBar />
      <div className="relative top-1/4 md:top-1/2 lg:top-1/3 xl:top-1/4 flex ml-auto mr-50 justify-center mt-0 mb-0 font-roboto_flex font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-hero">
        SAUL GOODMAN
      </div>
    </div>
  );
};

export default HeroFirst;
