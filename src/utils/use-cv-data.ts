import { setDefaultOptions } from "date-fns";
import { es, enUS, de } from "date-fns/locale";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { CvData, getCvData } from "@/cv-info/get-cv-data";

const dateFnsLocales = {
	en: enUS,
	es: es,
	de: de,
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
