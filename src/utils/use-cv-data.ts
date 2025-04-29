import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { CvData, getCvData } from "@/cv-info/get-cv-data";

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
	}, [lang]);

	return cvData;
}
