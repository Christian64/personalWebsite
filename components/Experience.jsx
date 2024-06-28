import { useMediaQuery } from "usehooks-ts";
export const Experience = ({
  company,
  time,
  logo,
  position,
  website,
  description,
  skills,
}) => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <a
      href={website}
      className="card card-compact lg:card-normal bg-base-100 shadow-md w-full font-roboto"
      target="_blank"
    >
      <div className="card-body  p-5 lg:gap-5 flex flex-row items-start">
        <div className="avatar">
          <div className="w-10 lg:w-12 rounded-xl flex gap-2">
            <img src={logo} alt={company} />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold">{position}</h3>
          <small className="font-normal text-md">
            {company} - {time}
          </small>
          <p className="hidden lg:block text-ellipsis max-h-[30px]">
            {description}
          </p>
        </div>
        <div className="card-footer truncate font-bold">{skills}</div>
      </div>
    </a>
  );
};
