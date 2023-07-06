import { css } from "@emotion/react";
import { Layout, LayoutContent } from "../components/layout";
import { client } from "../../libs/client";
import type { Profile } from "../../types/microcms";
import { useRecoilState, useRecoilValue } from "recoil";
import { linkState } from "../../state/recoil";
import Slide from "../components/slider";
import IntroductionCard from "@/components/introductionCard";
import { isDarkState } from "../../state/recoil";
import { Montserrat } from "@next/font/google";

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

const Home = ({ profile }: Profile) => {
	const yoCalc = () => {};
	const [link, setLink] = useRecoilState(linkState);
	const linkAtomData = {
		twitter: profile.tLink,
		instagram: profile.iLink,
		facebook: profile.fLink,
		isSet: true,
	};
	const isDark = useRecoilValue(isDarkState);
	const colorSelectCharacter = () => {
		if (isDark) {
			return "black";
		} else {
			return "white";
		}
	};
	if (link.isSet == false) {
		setLink(linkAtomData);
	}
	return (
		<Layout>
			<div css={homeTopImage}>
				<Slide profile={profile} />
			</div>
			<LayoutContent>
				<div css={profileStyle.section}>
					<img src={profile.profileIcon.url} css={profileStyle.icon} />
					<div css={profileStyle.name}>
						<h1>渡邉 雄大</h1>
						<p>Takahiro Watanabe</p>
					</div>
				</div>
				<IntroductionCard
					dist={"left"}
					title={"y/0"}
					titleStyle={"default"}
					text={"15"}
					textStyle={"default"}
					theme={colorSelectCharacter()}
				></IntroductionCard>
			</LayoutContent>
		</Layout>
	);
};

const homeTopImage = css`
	margin-top: 100px;
	margin-bottom: 150px;
`;

const profileStyle = {
	section: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-bottom: 100px;
	`,
	icon: css`
		width: 200px;
		border-radius: 100%;
		border: solid 4px white;
		margin-bottom: 50px;
	`,
	name: css`
		h1 {
			font-size: 50px;
		}
		p {
			font-size: 23px;
		}
	`,
};

export const getStaticProps = async () => {
	const data = await client.get({ endpoint: "profile" });
	return {
		props: {
			profile: data,
		},
	};
};

export default Home;
