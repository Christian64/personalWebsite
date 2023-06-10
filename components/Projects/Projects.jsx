import { Flex, Heading, Button } from "@chakra-ui/react";
import { ProjectCard } from "../Projects/ProjectCard";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <Flex
      p={5}
      w={{ xl: "50%", lg: "50%", md: "100%", sm: "100%" }}
      direction="column"
      alignItems="center"
    >
      <Heading
        display={["none", "none", "block", "block"]}
        textAlign="center"
        mb={3}
      >
        Projects
      </Heading>
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
      <Button
        mt={4}
        colorScheme="red"
        variant="ghost"
        w={["100%", "100%", 150, 150]}
      >
        Load More.
      </Button>
    </Flex>
  );
};
