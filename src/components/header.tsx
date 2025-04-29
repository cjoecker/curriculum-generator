import Image from "next/image";
import * as React from "react";

import candidateImage from "../../public/images/candidate-image.jpeg";

import { Link } from "./link";
import { useCvData } from '@/utils/use-cv-data'
import { Tag } from '@/components/tag'
import { PersonalInformation, TagInformation } from "@/cv-info/get-cv-data";
import { ReactNode } from "react";
import { LocationIcon } from "@/icons/LocationIcon";
import { BirthdayIcon } from "@/icons/BirthdayIcon";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { EmailIcon } from "@/icons/EmailIcon";
import { PassportIcon } from "@/icons/PassportIcon";
import { LinkedInIcon } from "@/icons/LinkedInIcon";
import { WebIcon } from "@/icons/WebIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import { GitHubIcon } from "@/icons/GitHubIcon";
import meshImage from "../../public/images/mesh-purple-turquoise.svg";



interface Props {
	icon: TagInformation["icon"];
	text: string;
	href?: string;
	altText: string;
}

const icons:Record<TagInformation["icon"], ReactNode> = {
	location: <LocationIcon />,
	birthday: <BirthdayIcon />,
	phone: <PhoneIcon />,
	email: <EmailIcon />,
	github: <GitHubIcon />,
	twitter: <TwitterIcon />,
	web: <WebIcon />,
	linkedin: <LinkedInIcon />,
	passport: <PassportIcon />,
}

const ICON_SIZE = 14;

export const PersonalInformationItem = ({
	icon,
	text,
	href,
	altText,
}: Props) => {
	const iconSvg = icons[icon as TagInformation["icon"]];
	const enhancedText = href ? <Link href={href}>{text}</Link> : <>{text}</>;

	return (
		<div className="flex">
			<Tag circularSize={24} dark={true}>
				<div style={{
					width: ICON_SIZE,
					height: ICON_SIZE,
				}} className="m-auto flex items-center justify-center">
				{iconSvg}
				</div>
			</Tag>
			<div className="my-auto ml-1.5 leading-4 whitespace-pre-wrap" aria-label={altText}>
				{enhancedText}
			</div>
		</div>
	);
};

export const Header = () => {
	const data = useCvData();
	return (
		<div className="flex flex-col gap-2 relative
		 p-4 bg-main text-white overflow-hidden rounded-b">
			<div className="flex flex-shrink-0 flex-grow-0 gap-4 relative z-10">
				<Image
					alt="candidate"
					src={candidateImage}
					className="h-[33mm] w-[33mm] rounded object-cover"
				/>
				<div className="flex w-full flex-1 flex-col justify-center">
					<h1 className="text-3xl font-bold text-[#9fd0f9]">
						{data?.personalInformation.name}
					</h1>
					<h2 className="text-lg font-bold">{data?.personalInformation.title}</h2>
					<p className="mt-2 text-sm">{data?.personalInformation.summary}</p>
				</div>
			</div>
			<div className="flex flex-1 flex-col relative z-10">
				<div className="grid w-full grid-cols-4 gap-2">
					{data?.personalInformation.tags.map((t) => {
						return (
							<PersonalInformationItem
								key={t.altText}
								icon={t.icon}
								text={t.text}
								href={t.href}
								altText={t.altText}
							/>
						);
					})}
				</div>
			</div>
			<Image
				aria-hidden={true}
				alt={""}
				src={meshImage}
				className="absolute flex right-[-30mm] top-[-50mm] z-0 h-[150mm] w-[450mm]"
			/>
		</div>
	);
};
