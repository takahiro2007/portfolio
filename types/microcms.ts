export type Profile = {
	profile: {
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		revisedAt: string;
		profileIcon: {
			url: string;
			height: Number;
			width: Number;
		};
		tLink: string;
		iLink: string;
		fLink: string;
		myImage1: {
			url: string;
			height: Number;
			width: Number;
		};
		myImage2?: { url: string; height: Number; width: Number };
		myImage3?: { url: string; height: Number; width: Number };
		myImage4?: { url: string; height: Number; width: Number };
		myImage5?: { url: string; height: Number; width: Number };
	};
};
