import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, #fffafa, #f8f8ff)",
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
