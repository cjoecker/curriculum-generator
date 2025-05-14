import { format } from "date-fns";

import { useCvData } from "@/utils/use-cv-data";

export function Footer() {
	const data = useCvData();
	return (
		<div className="absolute bottom-3 left-0 flex w-full justify-between px-6 italic">
			<div className="opacity-70">{data?.titles.footer}</div>
			<div className="">{`${data?.titles.lastUpdated} ${format(new Date(), "MMM yyyy")}`}</div>
		</div>
	);
}
