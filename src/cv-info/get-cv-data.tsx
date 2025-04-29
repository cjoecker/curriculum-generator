import { ReactNode } from "react";

export type CvData = {
	documentTitle: string;
	personalInformation: PersonalInformation;
	languages: Languages;
	hobbies: string;
	experience: ExperienceAndEducation[];
	education: ExperienceAndEducation[];
};

export type TagInformation = {
	icon:
		| "location"
		| "birthday"
		| "phone"
		| "email"
		| "github"
		| "web"
		| "linkedin"
		| "passport";
	altText: string;
	text: string;
	href?: string;
};

export type PersonalInformation = {
	name: string;
	title: string;
	summary: ReactNode;
	tags: TagInformation[];
};

export type Languages = { language: string; level: string }[];

export type Hobbies = string;

export type ExperienceAndEducation = {
	institution: string;
	location: string;
	positions: PeriodOfTime[];
};
export type PeriodOfTime = {
	title: string;
	startDate: Date;
	endDate: Date | "today";
	descriptionBlocks: { text: string; tagsTitle: string; tags: string[] }[];
};
export function getCvData(lang: string = "TEMPLATE"): Promise<CvData> {
	const path = `./languages/${lang.toLowerCase()}`;

	return import(path).then((module) => {
		const nameLower = module.PERSONAL_INFORMATION.name
			.toLowerCase()
			.replaceAll(" ", "_");
		const documentTitle = `cv_${lang}_${nameLower}`;

		return {
			documentTitle,
			personalInformation: module.PERSONAL_INFORMATION,
			languages: module.LANGUAGES,
			hobbies: module.HOBBIES,
			experience: module.EXPERIENCE,
			education: module.EDUCATION,
		};
	});
}
