import Head from "next/head";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Project } from "@/components/Project";
import { experiences, projects } from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Abreu - Portfolio</title>
      </Head>
      <div className="flex flex-col lg:flex-row m-5 p-2 gap-5">
        <AboutMe
          imgSrc="https://avatars.githubusercontent.com/u/22269371?v=4"
          name="Christian Abreu."
          description="+5 years of experience as a software developer, solving problems with code."
          githubLink={true}
          linkedinLink={true}
          resumeLink={true}
        />
        <div className="flex flex-col gap-2">
          {experiences.map((exp, i) => (
            <Experience key={i} {...exp} />
          ))}
          {projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

// rgb(244 242 238)
