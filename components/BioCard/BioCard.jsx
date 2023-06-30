import {
  HStack,
  Icon,
  Heading,
  Text,
  Box,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsFilePdf } from "react-icons/bs";
import "@fontsource/roboto";

export const BioCard = () => {
  return (
    <Flex
      w={["100%", "100%", "50%", "50%"]}
      alignItems={{ sm: "center", md: "center", lg: "start", xl: "start" }}
      justifyContent="center"
      mt={{ xl: 20, lg: 20 }}
    >
      <Box>
        <Heading
          fontSize={["3em", "3em", "5em", "5em"]}
          maxW="400px"
          textAlign={{ md: "center", sm: "center", lg: "start", xl: "start" }}
          lineHeight="1em"
          color="#3b3a3a"
          fontFamily="Roboto"
        >
          Christian Abreu.
        </Heading>
        <Heading
          textAlign={["center", "center", "start", "start"]}
          fontFamily="Roboto"
          color="#FF3131"
        >
          Full Stack Developer
        </Heading>
        <Button
          colorScheme="yellow"
          display={["none", "none", "block", "block"]}
          size="lg"
          mt={4}
        >
          Let's talk
        </Button>
        <HStack
          justifyContent="center"
          mt={2}
          display={["flex", "flex", "none", "none"]}
        >
          <Link
            style={{ textDecoration: "none" }}
            href="https://www.github.com/christian64"
          >
            <Icon boxSize={5} as={BsGithub} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            px={5}
            href="https://www.linkedin.com/in/christianabreuh"
          >
            <Icon boxSize={5} as={BsLinkedin} />
          </Link>
          <Link style={{ textDecoration: "none" }} href="./resume.pdf">
            <Icon boxSize={5} as={BsFilePdf} />
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};
