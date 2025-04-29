import { Experience } from "./experience";
import { Title } from "./title";

import { useCvData } from "@/utils/use-cv-data";

export const Education = () => {
	const data = useCvData();
	return (
		<div className="flex flex-col">
			<Title label={"Education"} />
			{data?.education.map((experienceBlock) => {
				return (
					<Experience
						experience={experienceBlock}
						key={experienceBlock.institution}
					/>
				);
			})}
		</div>
	);
};
