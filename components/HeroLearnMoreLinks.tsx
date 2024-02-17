import React from "react";

type HeroLearnMoreLinks = {
  text: string;
};

const HeroLearnMoreLinks = ({ text }: HeroLearnMoreLinks) => {
  return (
    <a href={text} className="font-bold hover:text-red-500">
      LEARN MORE
    </a>
  );
};

type NavBarTextLinksProps = {
  text: string;
  text2: string;
};

export default HeroLearnMoreLinks;
