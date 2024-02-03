import Link from "next/link";

export const Navbar = () => {
  const anchors = [
    {
      text: "Experience",
      link: "#experience",
    },
    {
      text: "Projects",
      link: "#projects",
    },
    { text: "About Me", link: "#aboutme" },
    { text: "Contact", link: "#contact" },
  ];

  const NavLink = ({ link, text }) => {
    return (
      <Link
        className="flex flex-row items-center gap-x-1 hover:text-primary text-semibold px-4 flex-nowrap"
        href={link}
      >
        {text}
      </Link>
    );
  };

  return (
    <>
      <nav className="navbar mt-5 mb-10 w-[100%] max-w-[500px] bg-white rounded-full shadow-md flex flex-row justify-center">
        <ul>
          {anchors.map((item, index) => (
            <li key={index}>
              <NavLink {...item} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
