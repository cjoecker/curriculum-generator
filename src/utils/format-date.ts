import { differenceInMonths, format } from "date-fns";

import { PeriodOfTime } from "@/utils/use-cv-data";

const yearAbbreviation: Record<string, string> = {
	en: "y",
	es: "a",
	de: "J",
};

const monthAbbreviation: Record<string, string> = {
	en: "m",
	es: "m",
	de: "M",
};

const present: Record<string, string> = {
	en: "Present",
	es: "Presente",
	de: "Aktuell",
};

const numberFormatLocale: Record<string, string> = {
	en: "en-US",
	es: "es-ES",
	de: "de-DE",
};

export function formatTimePeriod(
	startDate: PeriodOfTime["startDate"],
	endDate: PeriodOfTime["endDate"],
	lang: string = "en",
) {
	const newEndDate = endDate === "today" ? new Date() : endDate;
	const year = yearAbbreviation[lang] ?? yearAbbreviation.en;
	const month = monthAbbreviation[lang] ?? monthAbbreviation.en;
	const presentText = present[lang] ?? present.en;

	const distanceInYears = (differenceInMonths(newEndDate, startDate) + 1) / 12;

	const distanceUnit = distanceInYears > 1 ? year : month;
	const distanceValue =
		distanceInYears > 1
			? distanceInYears
			: differenceInMonths(newEndDate, startDate);
	const valueLocale = numberFormatLocale[lang] ?? numberFormatLocale.en;
	const roundedDistanceValue = Math.round(distanceValue * 10) / 10;
	const distanceFormattedValue = new Intl.NumberFormat(valueLocale).format(
		roundedDistanceValue,
	);

	const distanceText = `(${distanceFormattedValue}${distanceUnit})`;
	const dateFormat = "MMM yyyy";

	return endDate === "today"
		? `${format(startDate, dateFormat)} - ${presentText}  ${distanceText}`
		: `${format(startDate, dateFormat)} - ${format(endDate, dateFormat)}  ${distanceText}`;
}
