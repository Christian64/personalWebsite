import {
  Flex,
  VStack,
  Box,
  Heading,
  Button,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { RiApps2Fill } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { BsNewspaper } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";

export const Navbar = () => {
  return (
    <>
      <Flex
        alignItems="center"
        bg="white"
        m="auto"
        mt={10}
        borderRadius={50}
        boxShadow="lg"
        maxW={800}
      >
        <Link
          _hover={{ color: "#FF3131" }}
          flexGrow={1}
          borderRadius="50px 0px 0px 50px"
          p={3}
          href="#about"
        >
          <VStack spacing={1}>
            <Icon as={CgProfile} />
            <Text>About me</Text>
          </VStack>
        </Link>
        <Link
          _hover={{ color: "#FF3131" }}
          flexGrow={1}
          borderRadius="50px 0px 0px 50px"
          p={3}
          href="#projects"
        >
          <VStack spacing={1}>
            <Icon as={RiApps2Fill} />
            <Text>Projects</Text>
          </VStack>
        </Link>
        {/* <Link */}
        {/*   _hover={{ color: "#FF3131" }} */}
        {/*   target="_blank" */}
        {/*   flexGrow={1} */}
        {/*   borderRadius="50px 0px 0px 50px" */}
        {/*   p={3} */}
        {/*   href="https://dev.to/christianabreu" */}
        {/* > */}
        {/*   <VStack spacing={1}> */}
        {/*     <Icon as={BsNewspaper} /> */}
        {/*     <Text>Blog</Text> */}
        {/*   </VStack> */}
        {/* </Link> */}
        {/* <Link */}
        {/*   _hover={{ color: "#FF3131" }} */}
        {/*   flexGrow={1} */}
        {/*   borderRadius="50px 0px 0px 50px" */}
        {/*   p={3} */}
        {/*   href="#about" */}
        {/* > */}
        {/*   <VStack spacing={1}> */}
        {/*     <Icon as={VscTools} /> */}
        {/*     <Text>Skills</Text> */}
        {/*   </VStack> */}
        {/* </Link> */}
        <Link
          target="_blank"
          flexGrow={1}
          bg="#FF3131"
          color="white"
          borderRadius={50}
          p={3}
          href="./resume.pdf"
        >
          <VStack spacing={1}>
            <Icon as={AiFillFilePdf} />
            <Text>Resume</Text>
          </VStack>
        </Link>
      </Flex>
    </>
  );
};
