import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { css } from "@emotion/react";
import type { Profile } from "../../types/microcms";

const Slider = ({ profile }: Profile) => {
	let imageUrl = [profile.myImage1.url];
	if (profile.myImage2) {
		imageUrl.push(profile.myImage2.url);
	}
	if (profile.myImage3) {
		imageUrl.push(profile.myImage3.url);
	}
	if (profile.myImage4) {
		imageUrl.push(profile.myImage4.url);
	}
	if (profile.myImage5) {
		imageUrl.push(profile.myImage5.url);
	}

	return (
		<>
			<Splide
				aria-label="私のお気に入りの画像集"
				options={{
					type: "loop",
					autoplay: true, // 自動再生を有効
					interval: 10000, // 自動再生の間隔を3秒に設定
				}}
			>
				{imageUrl.map((url) => {
					return (
						<SplideSlide>
							<img css={slideImg} src={url} alt="portfolio image" />
						</SplideSlide>
					);
				})}
			</Splide>
		</>
	);
};

const slideImg = css`
	display: block;
	width: 100%;
	height: 500px;
	object-fit: cover;
`;

export default Slider;
