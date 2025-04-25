import { differenceInMonths, format } from "date-fns";

import { PeriodOfTime } from "@/cv-info/get-cv-data";

export function formatDate(date: Date, showDay = false) {
	return showDay ? format(date, "MMM dd, yyyy") : format(date, "MMM, yyyy");
}

const yearAbbreviation:Record<string, string> = {
		en: "y",
		es: "a",
		de: "J",
}

const monthAbbreviation:Record<string, string> = {
		en: "m",
		es: "m",
		de: "M",
}

const present: Record<string, string> = {
		en: "Present",
		es: "Presente",
		de: "Aktuell",
}

export function formatTimePeriod(
	startDate: PeriodOfTime["startDate"],
	endDate: PeriodOfTime["endDate"],
	lang: string,
) {
	const newEndDate = endDate === "today" ? new Date() : endDate;
	const year= yearAbbreviation[lang] ?? yearAbbreviation.en;
	const month= monthAbbreviation[lang] ?? monthAbbreviation.en;
	const presentText = present[lang] ?? present.en;

	const distanceInYears = (differenceInMonths(newEndDate, startDate) + 1) / 12;
	const distance =
		distanceInYears > 1
			? `${distanceInYears.toFixed(1).replace(".0", "")}${year}`
			: `${differenceInMonths(newEndDate, startDate)}${month}`;

	return endDate === "today"
		? `${formatDate(startDate)} - ${presentText}  (${distance})`
		: `${formatDate(startDate)} - ${formatDate(endDate)}  (${distance})`;
}
