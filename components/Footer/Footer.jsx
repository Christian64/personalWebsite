import { Text, Box, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
export const Footer = () => {
  return (
    <Box bg="#0a2540">
      <Text fontSize="2xl" color="white" textAlign="center" p={10}>
        Made it with love ❤️ by{" "}
        <NextLink
          target="_blank"
          href="https://www.linkedin.com/in/christianabreu"
        >
          Christian Abreu
        </NextLink>
      </Text>
    </Box>
  );
};
