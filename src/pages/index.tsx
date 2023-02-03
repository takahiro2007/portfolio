import { css } from "@emotion/react";
import { Layout, LayoutContent } from "../components/layout";
import { client } from "../../libs/client";
import type { Profile } from "../../types/microcms";
import { useRecoilState } from "recoil";
import { linkState } from "../../state/recoil";
import Slide from "../components/slider";
import { User } from "@nextui-org/react";

const Home = ({ profile }: Profile) => {
	console.log(profile);
	const [link, setLink] = useRecoilState(linkState);
	const linkAtomData = {
		twitter: profile.tLink,
		instagram: profile.iLink,
		facebook: profile.fLink,
		isSet: true,
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
		flex-direction: row;
		align-items: center;
		gap: 20px;
	`,
	style: {
		icon: css`
			width: 200px;
		`,
	},
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
