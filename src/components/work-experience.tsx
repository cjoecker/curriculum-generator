import { EXPERIENCE } from "../constants/curriculum-information";

import { Experience } from "./experience";
import { Title } from "./title";

export const WorkExperience = () => {
	return (
		<div className="flex flex-col">
			<Title label={"Work Experience"} />
			{EXPERIENCE.map((experienceBlock) => {
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
