import { css } from "@emotion/react";
import Image from "next/image";

const Header = () => {
  return (
    <div css={headerContent}>
      <h1 css={headerTitle}>Takahiro Watanabe</h1>
      <div>
        <div css={logo}>
          <Image
            src="/t_black.png"
            alt="twitter_logo"
            fill
            css={css`
              object-fit: contain;
            `}
          />
        </div>
        <div css={logo}>
          <Image
            src="/i_black.png"
            alt="instagram_logo"
            fill
            css={css`
              object-fit: contain;
            `}
          />
        </div>
        <div css={logo}>
          <Image
            src="/f_black.png"
            alt="facebook_logo"
            fill
            css={css`
              object-fit: contain;
            `}
          />
        </div>
      </div>
    </div>
  );
};

const headerContent = css`
  background: red;
  display: flex;
  flex-direction: column;
`;

const logo = css`
  position: relative;
  height: 35px;
`;

const headerTitle = css`
  font-weight: 100;
  font-size: 50px;
`;

export default Header;
