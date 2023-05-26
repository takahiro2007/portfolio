import { css } from "@emotion/react";
import { Layout, LayoutContent } from "../components/layout";
import { client } from "../../libs/client";
import type { Profile } from "../../types/microcms";
import { useRecoilState, useRecoilValue } from "recoil";
import { linkState } from "../../state/recoil";
import Slide from "../components/slider";
import IntroductionCard from "@/components/introductionCard";
import { isDarkState } from "../../state/recoil";
import { User } from "@nextui-org/react";

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
					<div css={profileStyle.style.icon}>
						<User size="" src={profile.profileIcon.url} name="" />
					</div>
					<h1>渡邉 雄大</h1>
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
	character: css`
		line-height: 30px;
	`,

	icon: css`
		width: 200px;
		border-radius: 100%;
		border: solid 4px white;
		margin-bottom: 50px;
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
