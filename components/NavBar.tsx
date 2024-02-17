import React from "react";
import NavBarBCSLogo from "./NavBarBCSLogo";
import NavBarTextLinks from "./NavBarTextLinks";

const NavBar = () => {
  return (
    <nav className="flex p-20 items-center content-center">
      <div>
        <NavBarBCSLogo />
      </div>

      <div>
        <ul className="list-none m-0 p-0 space-x-20 text-3xl ">
          <li className="float-left text-white hover:text-blue-500 font-roboto_flex">
            <NavBarTextLinks text="AMC" text2="https://www.amc.com" />
          </li>
          <li className="float-left text-white">
            <NavBarTextLinks
              text="Sony Pictures"
              text2="https://www.sonypictures.com"
            />
          </li>
          <li className="float-left text-white">
            <NavBarTextLinks
              text="Watch Now"
              text2="https://www.netflix.com/ph-en/title/80021955"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
