import { BsEyeFill, BsGithub } from "react-icons/bs";
import { projects } from "@/data";

export default function Projects() {
  return (
    <div className="md:w-[80%] mt-10">
      <h3 className="text-4xl pt-4 text-bold">Projects</h3>
      {/* <div className="flex flex-col-reverse mt-5 gap-x-1 md:flex-row"> */}
      {projects.map(
        ({ sourceCode, livePreview, title, description, image }, i) => (
          <div
            className="flex flex-col-reverse md:mt-20 mt-10 gap-x-1 md:flex-row"
            key={i}
          >
            <div>
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="text-xl my-2">{description}</p>
              <div className="my-2 flex gap-x-1 flex-row nowrap">
                <a
                  className="btn btn-primary shadow-md"
                  target="_blank"
                  href={sourceCode}
                >
                  {<BsGithub />}
                  Source Code
                </a>
                {livePreview && (
                  <a
                    className="btn btn-base-200 shadow-md"
                    target="_blank"
                    href={livePreview}
                  >
                    {<BsEyeFill />}
                    Live Preview
                  </a>
                )}
              </div>
            </div>
            <img
              className="md:rotate-3 md:max-w-[600px] mb-3 md:mb-none rounded-md shadow-xl"
              src={image}
            />
          </div>
        ),
      )}
    </div>
  );
}
