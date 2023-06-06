import { Navbar } from "@/components/Navbar/Navbar";
import { BioCard } from "@/components/BioCard/BioCard";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import { Projects } from "@/components/Projects/Projects";
import { Aboutme } from "@/components/Aboutme/Aboutme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Abreu</title>
      </Head>
      <Navbar />
      <BioCard />
      <Projects />
      <Aboutme />
      <Footer />
    </>
  );
}
