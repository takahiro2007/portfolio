import { atom } from "recoil";

export const linkState = atom({
	key: "link",
	default: {
		twitter: "",
		instagram: "",
		facebook: "",
		isSet: false,
	},
});

export const isDarkState = atom({
	key: "isDark",
	default: false,
});
