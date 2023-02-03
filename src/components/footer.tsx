import emotion from "@emotion/react";
import { css } from "@emotion/react";

const Footer = () => {
	return (
		<div css={footerContent}>
			<p>フッター</p>
		</div>
	);
};

const footerContent = css`
	max-width: 1024px;
	margin: 0 auto;
`;

export default Footer;
