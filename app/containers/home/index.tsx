import Layout from "common/layout";
import type { NextPage } from "next";
import Head from "next/head";

import View from "./view";

const Home: NextPage = () => (
  <>
    <Head>
      <title>{"Sparrow Shop"}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <View />
    </Layout>
  </>
);

export default Home;
