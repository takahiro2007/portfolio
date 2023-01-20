import { css } from "@emotion/react";

const Header = () => {
  return (
    <div css={headerContent}>
      <h1 css={headerTitle}>Takahiro Watanabe</h1>
      <div></div>
    </div>
  );
};
//ダークモードの時は、読み込むロゴのファイルを変える

const headerContent = css`
  background: red;
  max-width: 960px;
  display: flex;
  flex-direction: column;
`;

const headerTitle = css`
  font-weight: 100;
  font-size: 40px;
`;

export default Header;
