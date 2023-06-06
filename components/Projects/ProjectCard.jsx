import { Box, Image, HStack, Text, Button, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const ProjectCard = ({
  thumbnail,
  description,
  title,
  sourceCode,
  link,
}) => {
  return (
    <Box w="33%" maxW={400} boxShadow="md" bg="white" borderRadius={5}>
      <Image src={thumbnail} />
      <Heading textAlign="center" color="#3b3a3a" p={2}>
        {title}
      </Heading>
      <Text px={6}>{description}</Text>
      <HStack mt={5}>
        <Button variant="ghost" flexGrow={1} colorScheme="twitter">
          <NextLink href={link} target="_blank">
            Live
          </NextLink>
        </Button>
        <Button variant="ghost" flexGrow={1} colorScheme="twitter">
          <NextLink href={sourceCode}>Source Code</NextLink>
        </Button>
      </HStack>
    </Box>
  );
};
