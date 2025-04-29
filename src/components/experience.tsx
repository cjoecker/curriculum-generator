import { useSearchParams } from "next/navigation";

import { formatTimePeriod } from "../utils/format-date";

import { Tag } from "@/components/tag";
import { ExperienceAndEducation } from "@/cv-info/get-cv-data";
import { Markdown } from "@/components/markdown";

interface ExperienceProps {
	experience: ExperienceAndEducation;
}

export const Experience = ({ experience }: ExperienceProps) => {
	const searchParams = useSearchParams();
	const lang = searchParams.get("lang") ?? undefined;

	return (
		<div className="mb-5 last:mb-0">
			<div className="mb-1 leading-snug">
				<span className="font-bold text-gray-700">
					{experience.institution}
				</span>
				{" – "}
				<span>{experience.location}</span>
			</div>
			<div>
				{experience.positions.map((position) => {
					return (
						<div className="mb-5 last:mb-0" key={position.title}>
							<span className="text-lg/1 font-bold">{position.title}</span>
							<span className="text-subtitle ml-2">
								{formatTimePeriod(position.startDate, position.endDate, lang)}
							</span>
							{position.descriptionBlocks.map((description, index) => {
								return (
									<div className="mt-1 mb-3" key={index}>
										<div className="text-sm"><Markdown>{description.text}</Markdown></div>
										<div className="text-subtitle -mt-0.5 text-xs italic">
											{description.tagsTitle}
										</div>
										<div className="mt-1 flex flex-wrap gap-1.5">
											{description.tags.map((text) => {
												return <Tag key={text}>{text}</Tag>;
											})}
										</div>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
