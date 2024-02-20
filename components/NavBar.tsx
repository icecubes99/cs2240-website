import React from "react";
import NavBarBCSLogo from "./NavBarBCSLogo";
import NavBarTextLinks from "./NavBarTextLinks";

const NavBar = () => {
  return (
    <nav className="flex flex-col md:flex-row sm:flex-col flex-wrap p-20 items-center">
      <div className="">
        <NavBarBCSLogo />
      </div>

      <ul className="sm:flex list-none space-x-20 text-md md:text-lg lg:text-xl sm:flex-row space-y-10 ">
        <NavBarTextLinks text="" text2="" />
        <li className="text-white hover:text-red-500">
          <NavBarTextLinks text="AMC" text2="https://www.amc.com" />
        </li>
        <li className="float-left text-white hover:text-red-500">
          <NavBarTextLinks
            text="Sony Pictures"
            text2="https://www.sonypictures.com"
          />
        </li>
        <li className="float-left text-white hover:text-red-500">
          <NavBarTextLinks
            text="Watch Now"
            text2="https://www.netflix.com/ph-en/title/80021955"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
