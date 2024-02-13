import { FaArrowRight } from "react-icons/fa";
import { experiences } from "@/data";

export default function Experience() {
  return (
    <div className="flex flex-col my-10 md:w-[80%] m-auto" id="experience">
      <h1 className="text-4xl pt-4">Experience</h1>
      <div className="">
        {experiences.map(({ time, role, position, company }, index) => (
          <div key={index} className="mt-5">
            <span>{time}</span>
            <div>
              <h3 className="text-2xl">{position}</h3>
              <p className="text-lg md:w-[900px] mb-2">{role}</p>
              <button className="btn my-2 btn-secondary rounded-md shadow-md">
                Go to {company} {<FaArrowRight />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
