import React from "react";
import NavBar from "./NavBar";

const HeroFirst = () => {
  return (
    <div className="bg-jimmy w-screen h-screen ">
      <NavBar />
      <div className="absolute top-1/2 left-1/3 flex flex-row justify-center items-center font-roboto_flex font-bold text-8xl text-hero">
        SAUL GOODMAN
      </div>
    </div>
  );
};

export default HeroFirst;
