
import { Experience } from "./experience";
import { Title } from "./title";
import { useCvData } from '@/utils/use-cv-data'

export const WorkExperience = () => {
	const data = useCvData();
	return (
		<div className="flex flex-col">
			<Title label={"Work Experience"} />
			{data?.experience.map((experienceBlock) => {
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
