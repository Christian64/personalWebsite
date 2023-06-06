import { Heading, Text, Flex, VStack, Box, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export const Aboutme = () => {
  return (
    <Flex direction="column" p={10} w="80%" m="auto">
      <Heading py={5} w="80%" m="auto">
        About Me
      </Heading>
      <VStack>
        <Text fontSize="2xl" textAlign="justify" w="80%">
          Hello I'm Christian a software developer with hight experience working
          with Javascript and their ecosystem, I start in this love for fun but
          I notice that I really enjoy it & now I've been working for
          differences companies around the world and sharing experience and
          learn from differences cultures, I start as a freelancer but I dicided
          to work with a Team and I really love the experience, I learn so much
          & I share all my knowladge to my teammates.
        </Text>
        <Button size="lg" colorScheme="red" variant="outline">
          Hire Me!
        </Button>
      </VStack>
    </Flex>
  );
};
