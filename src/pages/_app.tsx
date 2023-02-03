import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getDocumentTheme, createTheme } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
	const [isDark, setIsDark] = useState(false);
	const lightTheme = createTheme({
		type: "light",
		theme: {
			colors: {
				background: "#fff",
				text: "#1d1d1d",
			},
		},
	});
	const darkTheme = createTheme({
		type: "dark",
		theme: {
			colors: {
				background: "#1d1d1d",
				text: "#fff",
			},
		},
	});

	useEffect(() => {
		// you can use any storage
		let theme = window.localStorage.getItem("data-theme");
		setIsDark(theme === "dark");

		const observer = new MutationObserver((mutation) => {
			let newTheme = getDocumentTheme(document?.documentElement);
			setIsDark(newTheme === "dark");
		});

		// Observe the document theme changes
		observer.observe(document?.documentElement, {
			attributes: true,
			attributeFilter: ["data-theme", "style"],
		});

		return () => observer.disconnect();
	}, []);
	return (
		<RecoilRoot>
			<NextUIProvider theme={isDark ? darkTheme : lightTheme}>
				<Component {...pageProps} />
			</NextUIProvider>
		</RecoilRoot>
	);
}
