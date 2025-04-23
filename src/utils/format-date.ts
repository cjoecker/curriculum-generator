import { differenceInMonths, format } from "date-fns";

import { PeriodOfTime } from "@/cv-info/get-cv-data";

export function formatDate(date: Date, showDay = false) {
	return showDay ? format(date, "MMM dd, yyyy") : format(date, "MMM, yyyy");
}

export function formatTimePeriod(
	startDate: PeriodOfTime["startDate"],
	endDate: PeriodOfTime["endDate"],
) {
	const newEndDate = endDate === "today" ? new Date() : endDate;

	const distanceInYears = (differenceInMonths(newEndDate, startDate) + 1) / 12;
	const distance =
		distanceInYears > 1
			? `${distanceInYears.toFixed(1).replace(".0", "")}y`
			: `${differenceInMonths(newEndDate, startDate)}m`;

	return endDate === "today"
		? `${formatDate(startDate)} - Present  (${distance})`
		: `${formatDate(startDate)} - ${formatDate(endDate)}  (${distance})`;
}
