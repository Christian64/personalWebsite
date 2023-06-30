import { Image, Link, Text, Heading } from "@chakra-ui/react";

export const ProjectCard = ({ thumbnail, description, title, link }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      w="300px"
      boxShadow="sm"
      bg="white"
      href={link}
      borderRadius={5}
      m={["auto", "auto", "0", "0"]}
    >
      <Image src={thumbnail} h="200px" />
      <Heading textAlign="center" size="md" color="#3b3a3a" p={2}>
        {title}
      </Heading>
      <Text textAlign="center" px={5} pb={3}>
        {description}
      </Text>
    </Link>
  );
};
