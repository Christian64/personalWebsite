import { Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const items = [
    {
      text: "Github",
      icon: BsGithub,
      link: "https://www.github.com/Christian64",
    },
    {
      text: "Linkedin",
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/christianabreuh",
    },
    { text: "Resume", icon: AiFillFilePdf, link: "./resume.pdf" },
  ];
  return (
    <>
      <Flex
        alignItems="center"
        bg="white"
        m="auto"
        mt={10}
        display={{ lg: "flex", xl: "flex", md: "none", sm: "none" }}
        borderRadius={50}
        boxShadow="lg"
        maxW={800}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return <NavItem key={index} {...item} isLast={isLast} />;
        })}
      </Flex>
    </>
  );
};
