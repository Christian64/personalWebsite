import { Roboto, PT_Serif } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
  variable: "--font-roboto",
});

export const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  variable: "--font-ptSerif",
});
