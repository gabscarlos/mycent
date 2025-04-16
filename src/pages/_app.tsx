import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { AutenticacaoProvider } from "@/data/contexts/AutenticacaoContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={{ fontFamily: "Nunito" }}>
      <AutenticacaoProvider>
        <Component {...pageProps} />
      </AutenticacaoProvider>
    </MantineProvider>
  );
}
