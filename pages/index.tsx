import { css } from "@emotion/react";
import Layout from "../components/layout";
import { client } from "../libs/client";
import type { Profile } from "../types/microcms";
import { useRecoilState } from "recoil";
import { linkState } from "../state/recoil";
import { useEffect } from "react";

const Home = ({ profile }: Profile) => {
  const [link, setLink] = useRecoilState(linkState);
  useEffect(() => {
    const linkAtomData = {
      twitter: profile.tLink,
      instagram: profile.iLink,
      facebook: profile.fLink,
      isSet: true,
    };
    if (link.isSet == false) {
      setLink(linkAtomData);
    }
  });

  return (
    <Layout>
      <></>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "profile" });
  return {
    props: {
      profile: data,
    },
  };
};

export default Home;
