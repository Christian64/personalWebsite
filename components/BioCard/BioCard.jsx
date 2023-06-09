import { Heading, Box, Button, Flex } from "@chakra-ui/react";
import "@fontsource/roboto";

export const BioCard = () => {
  return (
    <Flex
      w={{ lg: "50%", xl: "50%", md: "100%", sm: "100%" }}
      alignItems={{ sm: "center", md: "center", lg: "start", xl: "start" }}
      justifyContent="center"
      mt={{ xl: 20, lg: 20 }}
    >
      <Box>
        <Heading
          fontSize={{ lg: "5em", xl: "5em", md: "3em", sm: "3em" }}
          maxW="400px"
          textAlign={{ md: "center", sm: "center", lg: "start", xl: "start" }}
          lineHeight="1em"
          color="#3b3a3a"
          fontFamily="Roboto"
        >
          Christian Abreu.
        </Heading>
        <Heading
          textAlign={{ md: "center", sm: "center", lg: "start", xl: "" }}
          fontFamily="Roboto"
          color="#FF3131"
        >
          Full Stack Developer
        </Heading>
        <Button
          colorScheme="yellow"
          display={{ lg: "block", xl: "block", sm: "none", md: "none" }}
          size="lg"
          mt={4}
        >
          Let's talk
        </Button>
      </Box>
    </Flex>
  );
};
