import { Navbar } from "@/components/Navbar/Navbar";
import { Header } from "@/components/Header/Header";
import Head from "next/head";

import { Inter } from "next/font/google";
import Experience from "@/components/Experience/Experience";
import AboutMe from "@/components/AboutMe/AboutMe";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className}`}>
        <Head>
          <title>Christian Abreu - Portfolio</title>
        </Head>
        <div className="flex flex-col justify-center items-center w-[80%] max-w-[1280px] m-auto">
          <Navbar />
          <Header />
          <Experience />
          <Projects />
          <AboutMe />
        </div>
      </main>

      <Footer />
    </>
  );
}
