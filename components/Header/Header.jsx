import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";
import NextLink from "next/link";

const links = [
  {
    text: "",
    icon: <BsLinkedin />,
    link: "https://linkedin.com",
  },
  {
    text: "",
    icon: <BsGithub />,
    link: "https://linkedin.com",
  },
  {
    text: "",
    icon: <AiFillFilePdf />,
    link: "/resume.pdf",
  },
];

const Link = ({ children, icon, link }) => (
  <NextLink
    href={link}
    target="_blank"
    className={`flex flex-row items-center bg-white rounded-md shadow-md gap-x-2 py-2 px-4`}
  >
    {icon}
    {children}
  </NextLink>
);

export const Header = () => (
  <div>
    <div>
      <div className="avatar flex flex-row justify-center">
        <div className="w-20 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/22269371?s=400&u=d5bcfc2953ec8cc8547c8223d9888f4ed22685fb&v=4"
            alt="Christian Abreu"
            title="Christian Abreu"
          />
        </div>
      </div>
      <h1
        className={`text-[2rem] md:text-[2rem] font-bold text-center text-base-content`}
      >
        <span className="text-primary">Hi!</span> I'm Christian Abreu
        <span className="text-secondary">.</span>
      </h1>
      <p className={`text-xl md:text-2xl md:w-[500px] text-md text-center`}>
        Fullstack developer, +5 building tools with Javascript on the Frontend &
        Backend
      </p>
    </div>

    <div className="flex justify-center gap-x-2 mt-2">
      {links.map((item, i) => (
        <Link key={i} {...item}>
          {item.text}
        </Link>
      ))}
    </div>
  </div>
);
