import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MainLayout from "~/components/layout/main-layout";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Head>
        <title>lumedia</title>
        <meta name="description" content="lumedia homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default api.withTRPC(MyApp);
