export default function AboutMe() {
  return (
    <>
      <div
        className="md:w-[80%] md:m-auto py-10 md:pt-[10rem] md:pb-10"
        id="aboutme"
      >
        <img
          className="hidden md:w-52 md:block rounded-full md:ml-12 md:float-right"
          src="https://avatars.githubusercontent.com/u/22269371?s=400&u=d5bcfc2953ec8cc8547c8223d9888f4ed22685fb&v=4"
          alt="Christian Abreu"
          title="Christian Abreu"
        />
        <h1 className="text-4xl md:text-start py-2">About Me</h1>
        <p className="text-2xl md:text-start">
          I'm Christian Abreu a Software developer, I love the tecnologia (Main
          focus on software development) I keep my selft learning new
          technologies and better practicies, I love to build awesome
          projects/products with a high impact.
        </p>
      </div>
    </>
  );
}
