import { css } from "@emotion/react";
import Layout from "../components/layout";
import NextPage from "next";
import { client } from "../libs/client";
import type { Profile } from "../types/microcms";

const Home = (profile: Profile) => {
  return (
    <Layout>
      <a>{profile.tLink}</a>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "profile" });
  console.log(data);
  return {
    props: {
      profile: data,
    },
  };
};

export default Home;
