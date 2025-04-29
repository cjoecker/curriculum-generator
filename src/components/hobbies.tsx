import { Title } from "./title";

import { Markdown } from "@/components/markdown";
import { useCvData } from "@/utils/use-cv-data";

export const Hobbies = () => {
	const data = useCvData();
	return (
		<div className="flex flex-col">
			<Title label="Hobbies & Projects" />
			<Markdown>{data?.hobbies ?? ""}</Markdown>
		</div>
	);
};
