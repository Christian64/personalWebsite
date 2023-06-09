import { Image, Link, Text, Heading } from "@chakra-ui/react";

export const ProjectCard = ({ thumbnail, description, title, link }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      maxW={{ lg: 300, xl: 300, md: "90%", sm: "90%" }}
      boxShadow="md"
      bg="white"
      href={link}
      borderRadius={5}
    >
      <Image src={thumbnail} />
      <Heading textAlign="center" size="md" color="#3b3a3a" p={2}>
        {title}
      </Heading>
      <Text px={5} pb={3}>
        {description}
      </Text>
    </Link>
  );
};
