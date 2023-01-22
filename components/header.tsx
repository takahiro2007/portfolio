import { css } from "@emotion/react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { linkState } from "../state/recoil";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Montserrat } from "@next/font/google";
import { Switch } from "@nextui-org/react";

const montserratThin = Montserrat({
  weight: ["100"],
  style: ["normal"],
  subsets: ["latin"],
});
const montserratRegular = Montserrat({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header = () => {
  const link = useRecoilValue(linkState);
  const router = useRouter();
  return (
    <div>
      <div css={headerContent}>
        <h1 css={headerTitle}>Takahiro Watanabe</h1>
        <div css={logoSort}>
          <a href={link.twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} css={twitterIcon} />
          </a>
          <a href={link.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} css={instagramIcon} />
          </a>
          <a href={link.facebook} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} css={facebookIcon} />
          </a>
        </div>
      </div>
      <Switch size="lg" icon={<FontAwesomeIcon icon={faMoon} />} />
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

// Icons Style
const twitterIcon = css`
  height: 33px;
  color: black;
  &:hover {
    height: 38px;
    color: #1da1f2;
  }
`;
const instagramIcon = css`
  height: 33px;
  color: black;
  &:hover {
    height: 38px;
    color: #e1306c;
  }
`;
const facebookIcon = css`
  height: 33px;
  color: black;
  &:hover {
    height: 38px;
    color: #4267b2;
  }
`;

const headerLine = css`
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
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
  font-family: ${montserratRegular.style.fontFamily};
  color: black;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    font-size: 23px;
    color: gray;
  }
`;

const headerBarLinkCurrent = css`
  font-family: ${montserratRegular.style.fontFamily};
  color: green;
  text-decoration: none;
  font-size: 20px;
`;

const headerBar = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
`;

const logoSort = css`
  display: flex;
  gap: 50px;
`;

const headerTitle = css`
  font-family: ${montserratThin.style.fontFamily};
  font-size: 50px;
  font-weight: 100;
`;

export default Header;
