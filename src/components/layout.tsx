import { css } from "@emotion/react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface Props {
	children: ReactNode;
}

export const Layout = ({ children }: Props) => {
	return (
		<div css={layoutContainer}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export const LayoutContent = ({ children }: Props) => {
	return <div css={layoutContentStyle}>{children}</div>;
};

const layoutContentStyle = css`
	max-width: 1024px;
	margin: 0 auto;
`;

const layoutContainer = css`
	margin: 0 auto;
`;
