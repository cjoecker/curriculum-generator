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
			<Tag circularSize={24}>
				<div style={{
					width: ICON_SIZE,
					height: ICON_SIZE,
				}} className="m-auto flex items-center justify-center">
				{iconSvg}
				</div>
			</Tag>
			<div className="my-auto ml-1 leading-4 whitespace-pre-wrap" aria-label={altText}>
				{enhancedText}
			</div>
		</div>
	);
};

export const Header = () => {
	const data = useCvData();
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-shrink-0 flex-grow-0 gap-4">
				<Image
					alt="candidate"
					width={240}
					height={240}
					src={candidateImage}
					className="h-40 w-40 rounded-xl object-cover"
				/>
				<div className="flex w-full flex-1 flex-col justify-center">
					<h1 className="text-3xl font-bold text-(--subtitle-color)">
						{data?.personalInformation.name}
					</h1>
					<h2 className="text-lg font-bold">{data?.personalInformation.title}</h2>
					<p className="mt-2 text-sm">{data?.personalInformation.summary}</p>
				</div>
			</div>
			<div className="flex flex-1 flex-col">
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
		</div>
	);
};
