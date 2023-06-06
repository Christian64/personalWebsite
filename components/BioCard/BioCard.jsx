import {
  Heading,
  Text,
  Box,
  Image,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import "@fontsource/roboto";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const BioCard = () => {
  return (
    <Flex alignItems="center" mt={20}>
      <Image src="./ex6.png" maxH={600} />
      <Box mb="3em">
        <Heading
          fontSize="5em"
          maxW="400px"
          lineHeight="1em"
          color="#3b3a3a"
          fontFamily="Roboto"
        >
          Christian Abreu.
        </Heading>
        <Heading fontFamily="Roboto" color="#FF3131">
          Javascript Developer.
        </Heading>
        <Flex mt={5} bg="" gap={3}>
          <NextLink href="https://www.linkedin.com/in/christianabreuh">
            <Button
              _hover={{ boxShadow: "sm" }}
              size="lg"
              boxShadow="md"
              borderRadius={100}
              color="white"
              bg="#0072b1"
            >
              <Icon as={BsLinkedin} mr={2} />
              <Text>Linkedin</Text>
            </Button>
          </NextLink>
          <NextLink href="https://www.github.com/christian64">
            <Button
              _hover={{ boxShadow: "sm" }}
              size="lg"
              boxShadow="md"
              borderRadius={50}
              color="white"
              bg="black"
            >
              <Icon as={BsGithub} mr={2} />
              <Text>Github</Text>
            </Button>
          </NextLink>
        </Flex>
      </Box>
    </Flex>
  );
};
