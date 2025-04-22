import { EDUCATION } from "../constants/curriculum-information";

import { Experience } from "./experience";
import { Title } from "./title";

export const Education = () => {
	return (
		<div className="flex flex-col">
			<Title label={"Education"} />
			{EDUCATION.map((experienceBlock) => {
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
