import { ReactNode } from "react";

export type CvData = {
	personalInformation: PersonalInformation;
	languages: Languages;
	hobbies: Hobbies;
	experience: ExperienceAndEducation[];
	education: ExperienceAndEducation[];
};

export type PersonalInformation = {
	name: string;
	title: string;
	summary: ReactNode;
	tags: {
		icon:
			| "location"
			| "birthday"
			| "phone"
			| "email"
			| "github"
			| "twitter"
			| "web"
			| "linkedin"
			| "passport";
		altText: string;
		text: string;
		href?: string;
	}[];
};

export type Languages = { language: string; level: string }[];

export type Hobbies = ReactNode;

export type ExperienceAndEducation = {
	institution: string;
	location: string;
	positions: PeriodOfTime[];
};
export type PeriodOfTime = {
	title: string;
	startDate: Date;
	endDate: Date | "today";
	descriptionBlocks: { text: ReactNode; tagsTitle: string; tags: string[] }[];
};
export function getCvData(lang: string = "TEMPLATE"): Promise<CvData> {
	const path = `./languages/${lang.toLowerCase()}`;

	return import(path).then((module) => ({
		personalInformation: module.PERSONAL_INFORMATION,
		languages: module.LANGUAGES,
		hobbies: module.HOBBIES,
		experience: module.EXPERIENCE,
		education: module.EDUCATION,
	}));
}
