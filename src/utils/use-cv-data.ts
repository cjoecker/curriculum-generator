import { setDefaultOptions } from "date-fns";
import { es, enUS, de } from "date-fns/locale";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

export type Titles = {
	education: string;
	workExperience: string;
	languages: string;
	hobbiesAndProjects: string;
	footer: string;
	lastUpdated: string;
};

export type CvData = {
	documentTitle: string;
	personalInformation: PersonalInformation;
	languages: Languages;
	hobbies: string;
	experience: ExperienceAndEducation[];
	education: ExperienceAndEducation[];
	titles: Titles;
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
	const path = `../cv-info/languages/${lang.toLowerCase()}`;

	const titleLocale = lang === "TEMPLATE" ? "en" : lang;
	const titleData = titles[titleLocale as keyof typeof titles];

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
			titles: titleData,
		};
	});
}

const dateFnsLocales = {
	en: enUS,
	es: es,
	de: de,
};

const titles: Record<string, Titles> = {
	de: {
		workExperience: "Berufserfahrung",
		education: "Ausbildung",
		languages: "Sprachen",
		hobbiesAndProjects: "Hobbys & Projekte",
		footer: "Handgefertigt mit ♥ und React",
		lastUpdated: "Aktualisiert im",
	},
	en: {
		workExperience: "Work Experience",
		education: "Education",
		languages: "Languages",
		hobbiesAndProjects: "Hobbies & Projects",
		footer: "Handcrafted with ♥ and React",
		lastUpdated: "Last updated on",
	},
	es: {
		workExperience: "Experiencia Laboral",
		education: "Educación",
		languages: "Idiomas",
		hobbiesAndProjects: "Aficiones & Proyectos",
		footer: "Hecho a mano con ♥ y React",
		lastUpdated: "Última actualización el",
	},
};

export function useCvData() {
	const searchParams = useSearchParams();
	const lang = searchParams.get("lang") ?? undefined;

	const [cvData, setCvData] = useState<CvData>();

	useEffect(() => {
		const getData = async () => {
			const data = await getCvData(lang);
			setCvData(data);
		};
		void getData();

		const setDateFnsLocale = () => {
			const locale = dateFnsLocales[lang as keyof typeof dateFnsLocales];
			setDefaultOptions({
				locale: locale,
			});
		};
		setDateFnsLocale();
	}, [lang]);

	return cvData;
}
