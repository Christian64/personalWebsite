import "@/styles/app.css";
import { roboto, ptSerif } from "@/fonts";

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${roboto.variable} ${ptSerif.variable} max-w-[1280px] m-auto  font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
