import { ExperienceAndEducation } from "@/cv-info/get-cv-data";
import { formatTimePeriod } from "../utils/format-date";
import { Tag } from '@/components/tag'
import { useSearchParams } from "next/navigation";

interface ExperienceProps {
	experience: ExperienceAndEducation;
}

export const Experience = ({ experience }: ExperienceProps) => {
	const searchParams = useSearchParams();
	const lang = searchParams.get("lang") ?? undefined;

	return (
		<div className="mb-5 last:mb-0">
			<div className="leading-snug mb-1">
				<span className="font-bold text-gray-700">{experience.institution}</span>
				{" – "}
				<span>{experience.location}</span>
			</div>
			<div>
				{experience.positions.map((position) => {
					return (
						<div className="mb-5 last:mb-0" key={position.title}>
							<span className=" font-bold text-lg/1 ">{position.title}</span>
							<span className="ml-2 text-(--subtitle-color)">
								{formatTimePeriod(position.startDate, position.endDate, lang)}
							</span>
							{position.descriptionBlocks.map((description, index) => {
								return (
									<div className="mt-1 mb-3" key={index}>
										<div className="text-sm">{description.text}</div>
										<div className="-mt-0.5 text-xs italic text-(--subtitle-color)">
											{description.tagsTitle}
										</div>
										<div className="flex flex-wrap gap-1.5 mt-1">
											{description.tags.map((text) => {
												return (
													<Tag
														key={text}
													>
														{text}
													</Tag>
												);
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
