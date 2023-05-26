import { css } from "@emotion/react";
import { Montserrat } from "@next/font/google";
import type { NextFont } from "@next/font";
import { CSSProperties } from "react";
const montserratBold = Montserrat({
	weight: ["800"],
	style: ["italic"],
	subsets: ["latin"],
});
const montserratThin = Montserrat({
	weight: ["200"],
	style: ["italic"],
	subsets: ["latin"],
});

interface Props {
	dist: "left" | "center" | "right";
	title: string;
	titleStyle: "default";
	text: string;
	textStyle: "default";
	theme: "black" | "white";
}

const IntroductionCard = ({ dist, title, titleStyle, text, textStyle, theme }: Props) => {
	const cardBgClor = (theme: "black" | "white" | undefined) => {
		if (theme === "black") {
			return "white";
		} else if (theme === "white") {
			return "black";
		}
	};
	const distSelect = () => {
		if (dist === "left") {
			return Style.sectionLeft(cardBgClor(theme));
		} else if (dist === "right") {
			return Style.sectionRight(cardBgClor(theme));
		} else {
			return Style.sectionCenter(cardBgClor(theme));
		}
	};
	return (
		<div css={distSelect()}>
			<div css={cardStyle.year.character(`${theme}`, montserratBold)}>
				{text}
				<span css={cardStyle.year.yo}>{title}</span>
			</div>
		</div>
	);
};

const Style = {
	sectionLeft: (theme: string) => css`
		background-color: ${theme};
		padding: 40px 60px 40px 60px;
		width: fit-content;
		height: fit-content;
		margin: 0 auto 0 0;
	`,
	sectionCenter: (theme: string) => css`
		background-color: ${theme};
		padding: 40px 60px 40px 60px;
		width: fit-content;
		height: fit-content;
		margin: 0 auto;
	`,
	sectionRight: (theme: string) => css`
		background-color: ${theme};
		padding: 40px 60px 40px 60px;
		width: fit-content;
		height: fit-content;
		margin: 0 0 0 auto;
	`,
};

const cardStyle = {
	name: {
		section: css`
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-bottom: 100px;
		`,
		character: css`
			line-height: 30px;
		`,

		icon: css`
			width: 200px;
			border-radius: 100%;
			border: solid 4px white;
			margin-bottom: 50px;
		`,
	},
	year: {
		character: (colorSelect: string, montserrat: NextFont) => css`
			color: ${colorSelect};
			font-size: 100px;
			font-family: ${montserrat.style.fontFamily};
		`,
		yo: css`
			font-family: ${montserratThin.style.fontFamily};
			font-size: 40px;
			margin-left: 20px;
		`,
	},
};

export default IntroductionCard;
