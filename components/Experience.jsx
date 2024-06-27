export const Experience = ({
  company,
  time,
  logo,
  position,
  website,
  description,
  skills,
}) => {
  return (
    <a
      href={website}
      className="card bg-base-100 shadow-md w-full font-roboto"
      target="_blank"
    >
      <div className="card-body p-5 lg:gap-5 flex flex-row items-start">
        <div className="avatar">
          <div className="w-10 lg:w-12 rounded-xl flex gap-2">
            <img src={logo} alt={company} />
          </div>
        </div>
        <div>
          <h3 className="font-bold">
            {position}
            <small className="font-normal text-md">
              - <span>{company}</span> ({time})
            </small>
          </h3>
          <p>{description}</p>
        </div>
        <div className="card-footer truncate font-bold">{skills}</div>
      </div>
    </a>
  );
};
