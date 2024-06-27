import { LinkedinIcon } from "@/icons/LinkedinIcon";
import { PdfIcon } from "@/icons/PdfIcon";
import { GithubIcon } from "@/icons/github";

const BioLink = ({ children, href }) => (
  <a className="text-gray-700 flex gap-2" href={href} target="_blank">
    {children}
  </a>
);

export const AboutMe = ({
  imgSrc,
  name,
  description,
  githubLink,
  linkedinLink,
  resumeLink,
}) => {
  return (
    <div className="flex flex-col gap-2 items-center lg:items-start lg:px-4 lg:py-2 lg:w-6/12">
      <div className="avatar">
        <div className="w-28 lg:w-36 rounded-full m-auto lg:m-0">
          <img src={imgSrc} alt="Christian Abreu" />
        </div>
      </div>
      <h2 className="text-2xl font-ptSerif inline lg:text-[2rem] text-center lg:text-start font-bold">
        {name}
      </h2>
      <p className="lg:text-lg text-center font-roboto lg:text-start w-[70%]">
        {description}
      </p>
      <div className="flex gap-4 items-center font-roboto">
        {githubLink && (
          <BioLink href="https://github.com/Christian64">
            <GithubIcon />
            Github
          </BioLink>
        )}
        {linkedinLink && (
          <BioLink href="https://www.linkedin.com/feed/">
            <LinkedinIcon />
            Linkedin
          </BioLink>
        )}

        {resumeLink && (
          <BioLink href="./resume.pdf">
            <PdfIcon />
            Resume
          </BioLink>
        )}
      </div>
    </div>
  );
};
