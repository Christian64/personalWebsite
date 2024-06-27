import { EyeIcon } from "@/icons/EyeIcon";
import { GithubIcon } from "@/icons/github";

export const Project = ({ name, link, img, description, github }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-md card-compact font-roboto">
        <div href="link" className="card-body">
          <div className="flex justify-between">
            <h3 className="card-title font-ptSerif">{name}</h3>
            <div className="flex gap-4">
              <a href={link} className="btn btn-secondary font-normal btn-sm">
                <EyeIcon />
                See Project
              </a>
              <a href={github} className="flex items-center">
                <GithubIcon />
                Source Code
              </a>
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
