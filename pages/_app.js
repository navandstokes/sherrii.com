import { useEffect } from "react";
import App from "next/app";
import Router from "next/router";
import Head from "next/head";
import "lib/globals.css";
import "lib/nprogress.css";

import NProgress from "nprogress";

function MyApp({ Component, pageProps, menu }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.inc();
    });
    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
    Router.events.on("routeChangeComplete", (url) => {
      NProgress.done();
    });
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Photographer and retoucher from Toronto, Canada."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
