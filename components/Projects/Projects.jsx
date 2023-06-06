import { Heading, Box, Flex } from "@chakra-ui/react";
import { ProjectCard } from "../Projects/ProjectCard";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <Box p={20} id="skills" bg="white">
      <Heading color="#3b3a3a" fontSize="4em" textAlign="center">
        Projects
      </Heading>
      <Flex w="90%" m="auto" mt={6} gap={5} justifyContent="center" wrap="wrap">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Flex>
    </Box>
  );
};
