import { Title } from "./title";

import { useCvData } from "@/utils/use-cv-data";

export const Languages = () => {
	const data = useCvData();
	return (
		<div className="mb-4 flex flex-col">
			<Title label="Languages" />
			{data?.languages.map((l) => {
				return (
					<div className="flex-1" key={l.language}>
						<span className="font-bold">{`${l.language}: `}</span>
						<span className="whitespace-pre-wrap">{l.level}</span>
					</div>
				);
			})}
		</div>
	);
};
