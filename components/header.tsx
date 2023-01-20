import { css } from "@emotion/react";
import Image from "next/image";

const Header = () => {
  return (
    <div css={headerContent}>
      <h1 css={headerTitle}>Takahiro Watanabe</h1>
      <div css={logoSort}>
        <div css={twitter_logo}>
          <Image src="/t_black.png" alt="twitter_logo" fill />
        </div>
        <div css={logo}>
          <Image src="/i_black.png" alt="instagram_logo" fill />
        </div>
        <div css={logo}>
          <Image src="/f_black.png" alt="facebook_logo" fill />
        </div>
      </div>
    </div>
  );
};

const headerContent = css`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoSort = css`
  display: flex;
  gap: 40px;
`;

const logo = css`
  position: relative;
  height: 32px;
  width: 32px;
`;

const twitter_logo = css`
  position: relative;
  width: 35px;
  height: 31px;
`;

const headerTitle = css`
  font-weight: 100;
  font-size: 50px;
`;

export default Header;
