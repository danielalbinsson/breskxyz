import "../styles/App.scss";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
