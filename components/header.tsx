import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { linkState } from "../state/recoil";
import { useRouter } from "next/router";

const Header = () => {
  const link = useRecoilValue(linkState);
  const router = useRouter();
  return (
    <div>
      <div css={headerContent}>
        <h1 css={headerTitle}>Takahiro Watanabe</h1>
        <div css={logoSort}>
          <a
            css={twitter_logo}
            href={link.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/t_black.png" alt="twitter_logo" fill />
          </a>
          <a
            css={logo}
            href={link.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/i_black.png" alt="instagram_logo" fill />
          </a>
          <a
            css={logo}
            href={link.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/f_black.png" alt="facebook_logo" fill />
          </a>
        </div>
      </div>
      <hr css={headerLine} />
      <div css={headerBar}>
        <Link
          css={router.pathname === "/" ? headerBarLinkCurrent : headerBarLink}
          href={"/"}
        >
          Home
        </Link>
        <Link
          css={
            router.pathname === "/experience"
              ? headerBarLinkCurrent
              : headerBarLink
          }
          href={"/experience"}
        >
          Experience
        </Link>
        <Link
          css={
            router.pathname === "/blog" ? headerBarLinkCurrent : headerBarLink
          }
          href={"/blog"}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

const headerLine = css`
  margin-top: 40px;
  max-width: 160px;
  border-width: 0.5px;
`;

const headerContent = css`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const headerBarLink = css`
  font-family: "Montserrat";
  color: black;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    font-size: 23px;
    color: gray;
  }
`;

const headerBarLinkCurrent = css`
  font-family: "Montserrat";
  color: green;
  text-decoration: none;
  font-size: 20px;
`;

const headerBar = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
  padding-top: 30px;
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
  font-size: 50px;
  font-weight: 100;
`;

export default Header;
