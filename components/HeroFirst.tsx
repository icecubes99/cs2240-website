import React from "react";
import NavBar from "./NavBar";

const HeroFirst = () => {
  return (
    <div className="bg-jimmy w-screen h-screen">
      <NavBar />
      <div className="text-white absolute top-1/2 left-1/2">SAUL GOODMAN</div>
    </div>
  );
};

export default HeroFirst;
