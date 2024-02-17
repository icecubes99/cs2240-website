import { Inter, Raleway, Roboto_Flex } from "next/font/google";

const raleway_init = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const roboto_flex_init = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-flex",
});

export const raleway = raleway_init.className;
export const roboto_flex = roboto_flex_init.className;
