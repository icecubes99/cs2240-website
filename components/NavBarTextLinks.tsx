import React from "react";

type NavBarTextLinksProps = {
  text: string;
  text2: string;
};

const NavBarTextLinks = ({ text, text2 }: NavBarTextLinksProps) => {
  return (
    <a href={text2} className="font-bold">
      {text}
    </a>
  );
};

export default NavBarTextLinks;
