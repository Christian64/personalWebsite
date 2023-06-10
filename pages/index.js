import { Navbar } from "@/components/Navbar/Navbar";
import { BioCard } from "@/components/BioCard/BioCard";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import { Projects } from "@/components/Projects/Projects";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Abreu</title>
      </Head>
      <Navbar />
      <Flex
        p={[0, 0, 5, 5]}
        mt={[3, 3, 6, 6]}
        direction={["column", "column", "row", "row"]}
      >
        <BioCard />
        <Projects />
      </Flex>
      <Footer />
    </>
  );
}
