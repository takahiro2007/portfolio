import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Switch, changeTheme, useTheme } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { isDarkState } from "state/recoil";
import { useEffect } from "react";

const DarkSwitch = () => {
	const { type, isDark } = useTheme();
	const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkState);

	useEffect(() => {
		setIsDarkMode(isDark);
	});

	const handleChange = () => {
		const nextTheme = isDark ? "light" : "dark";
		window.localStorage.setItem("data-theme", nextTheme); // you can use any storage
		changeTheme(nextTheme);
		if (nextTheme === "light") {
			setIsDarkMode(false);
		} else {
			setIsDarkMode(true);
		}
	};
	return (
		<Switch
			size="lg"
			checked={isDark}
			onChange={handleChange}
			icon={<FontAwesomeIcon icon={faMoon} />}
		/>
	);
};

export default DarkSwitch;
