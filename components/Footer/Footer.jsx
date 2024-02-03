import NextLink from "next/link";
export default function Footer() {
  return (
    <div className="p-4 w-[100%] bg-primary text-white text-center">
      <p>
        All right reserverd <span>Christian Abreu</span>,{" "}
        <NextLink href="https://linkedin.com" target="_blank">
          Hire Me.
        </NextLink>
      </p>
    </div>
  );
}
