import { css } from "@emotion/react";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
import Header from "./header";

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
  max-width: 1332px;
  margin: 0 auto;
`;
export default Layout;
