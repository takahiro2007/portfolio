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
