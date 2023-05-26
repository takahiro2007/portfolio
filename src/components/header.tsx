import { css } from "@emotion/react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { linkState, isDarkState } from "../../state/recoil";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Montserrat } from "@next/font/google";
import DarkSwitch from "./darkSwitch";

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
	const isDark = useRecoilValue(isDarkState);
	const colorSelect = () => {
		if (isDark) {
			return "white";
		} else {
			return "black";
		}
	};
	const link = useRecoilValue(linkState);
	const router = useRouter();
	return (
		<div css={headerWidth}>
			<div css={headerContent}>
				<h1 css={headerTitle}>Takahiro Watanabe</h1>
				<div css={logoSort}>
					<a href={link.twitter} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={faTwitter}
							css={iconStyles.twitterIcon(colorSelect())}
						/>
					</a>
					<a href={link.instagram} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={faInstagram}
							css={iconStyles.instagramIcon(colorSelect())}
						/>
					</a>
					<a href={link.facebook} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={faFacebook}
							css={iconStyles.facebookIcon(colorSelect())}
						/>
					</a>
				</div>
			</div>
			<DarkSwitch />
			<hr css={headerLine} />
			<div css={headerBar}>
				<Link
					css={
						router.pathname === "/"
							? pageLink.currentStyle
							: pageLink.defaultStyle(colorSelect())
					}
					href={"/"}
				>
					Home
				</Link>
				<Link
					css={
						router.pathname === "/experience"
							? pageLink.currentStyle
							: pageLink.defaultStyle(colorSelect())
					}
					href={"/experience"}
				>
					Experience
				</Link>
				<Link
					css={
						router.pathname === "/blog"
							? pageLink.currentStyle
							: pageLink.defaultStyle(colorSelect())
					}
					href={"/blog"}
				>
					Blog
				</Link>
			</div>
		</div>
	);
};

const iconStyles = {
	twitterIcon: (colorSelect: string) => css`
		height: 33px;
		color: ${colorSelect};
		&:hover {
			height: 38px;
			color: #1da1f2;
		}
	`,
	instagramIcon: (colorSelect: string) => css`
		height: 33px;
		color: ${colorSelect};
		&:hover {
			height: 38px;
			color: #e1306c;
		}
	`,
	facebookIcon: (colorSelect: string) => css`
		height: 33px;
		color: ${colorSelect};
		&:hover {
			height: 38px;
			color: #4267b2;
		}
	`,
};

const pageLink = {
	defaultStyle: (colorSelect: string) => css`
		font-family: ${montserratRegular.style.fontFamily};
		text-decoration: none;
		font-size: 20px;
		color: ${colorSelect};
		position: relative;
		&:after {
			content: "";
			position: absolute;
			background: ${colorSelect};
			left: 0;
			bottom: 0;
			right: 0;
			margin: 0 auto;
			width: 100%;
			height: 2px;
			-webkit-transform: scaleX(0);
			-ms-transform: scaleX(0);
			transform: scaleX(0);
			-webkit-transition: all 0.5s ease;
			-moz-transition: all 0.5s ease;
			transition: all 0.5s ease;
		}
		&:hover {
			color: gray;
			&:after {
				-webkit-transform: scaleX(1);
				-ms-transform: scaleX(1);
				transform: scaleX(1);
			}
		}
	`,
	currentStyle: css`
		font-family: ${montserratRegular.style.fontFamily};
		color: green;
		text-decoration: none;
		font-size: 20px;
	`,
};

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

const headerWidth = css`
	max-width: 1124px;
	margin: 0 auto;
`;

export default Header;
