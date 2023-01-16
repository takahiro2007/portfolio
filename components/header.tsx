import { css } from "@emotion/react";

const Header = () => {
  return (
    <div css={headerContent}>
      <h1>Takahiro Watanabe</h1>
    </div>
  );
};

const headerContent = css`
  font-weight: normal;
`;

export default Header;
