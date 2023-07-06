import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { css } from "@emotion/react";

const defaultFonts = css`
	body {
		font-family: "Montserrat", sans-serif;
	}
`;

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}
	render() {
		return (
			<Html lang="jp">
				<Head>{CssBaseline.flush()}</Head>
				<body css={defaultFonts}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
