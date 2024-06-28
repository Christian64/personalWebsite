import { EyeIcon } from "@/icons/EyeIcon";
import { GithubIcon } from "@/icons/github";

export const Project = ({ name, link, img, description, github }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-md card-compact font-roboto">
        <div href="link" className="card-body">
          <div className="flex justify-between">
            <h3 className="card-title font-ptSerif">{name}</h3>
            <div className="flex lg:gap-4">
              {link && (
                <a
                  href={link}
                  className="btn btn-ghost lg:btn-primary font-normal btn-sm"
                >
                  <EyeIcon />
                  <span className="hidden lg:inline">See Project</span>
                </a>
              )}
              {github && (
                <a href={github} className="btn btn-ghost font-normal btn-sm">
                  <GithubIcon />
                  <span className="hidden lg:inline">Source Code</span>
                </a>
              )}
            </div>
          </div>
          <p className="text-md">{description}</p>
        </div>
        <figure>
          <img src={img} alt={name} />
        </figure>
      </div>
    </>
  );
};
