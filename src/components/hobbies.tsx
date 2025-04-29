import { Title } from "./title";

import { useCvData } from "@/utils/use-cv-data";
import { Markdown } from "@/components/markdown";

export const Hobbies = () => {
	const data = useCvData();
	return (
		<div className="flex flex-col">
			<Title label="Hobbies & Projects" />
			<Markdown>{data?.hobbies ?? ""}</Markdown>
		</div>
	);
};
