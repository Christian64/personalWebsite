import { Box, Flex } from "@chakra-ui/react";
import { ProjectCard } from "../Projects/ProjectCard";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <Box p={5} w={{ xl: "50%", lg: "50%", md: "100%", sm: "100%" }}>
      <Flex
        justifyContent={{
          md: "center",
          sm: "center",
          lg: "center",
          xl: "center",
        }}
        gap={4}
        wrap="wrap"
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Flex>
    </Box>
  );
};
