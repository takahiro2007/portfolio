import { css } from "@emotion/react";
import Image from "next/image";
import { ReactNode } from "react";
import { ProfileNode } from "../types/microcms";
import Header from "./header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div css={layoutContainer}>
      <Header />
      {children}
    </div>
  );
};
//ダークモードの時は、読み込むロゴのファイルを変える
const layoutContainer = css`
  max-width: 1124px;
  margin: 0 auto;
`;
export default Layout;
