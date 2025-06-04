import Image from "next/image";
import * as React from "react";
import { ReactNode } from "react";

import candidateImage from "../../public/images/candidate-image.jpeg";
import meshImage from "../../public/images/mesh-purple-turquoise.svg";

import { Link } from "./link";

import { Tag } from "@/components/tag";
import { BirthdayIcon } from "@/icons/birthday";
import { EmailIcon } from "@/icons/email";
import { GitHubIcon } from "@/icons/git-hub";
import { LinkedInIcon } from "@/icons/linked-in";
import { Location } from "@/icons/location";
import { PassportIcon } from "@/icons/passport";
import { PhoneIcon } from "@/icons/phone";
import { WebIcon } from "@/icons/web";
import { TagInformation } from "@/utils/use-cv-data";
import { useCvData } from "@/utils/use-cv-data";

interface Props {
	icon: TagInformation["icon"];
	text: string;
	href?: string;
	altText: string;
}

const icons: Record<TagInformation["icon"], ReactNode> = {
	location: <Location />,
	birthday: <BirthdayIcon />,
	phone: <PhoneIcon />,
	email: <EmailIcon />,
	github: <GitHubIcon />,
	web: <WebIcon />,
	linkedin: <LinkedInIcon />,
	passport: <PassportIcon />,
};

const ICON_SIZE = 14;

export const PersonalInformationItem = ({
	icon,
	text,
	href,
	altText,
}: Props) => {
	const iconSvg = icons[icon as TagInformation["icon"]];
	const enhancedText = href ? (
		<Link dark href={href}>
			{text}
		</Link>
	) : (
		<>{text}</>
	);

	return (
		<div className="flex">
			<Tag circularSize={24} dark={true}>
				<div
					style={{
						width: ICON_SIZE,
						height: ICON_SIZE,
					}}
					className="m-auto flex items-center justify-center"
				>
					{iconSvg}
				</div>
			</Tag>
			<div
				className="my-auto ml-1.5 leading-4 whitespace-pre-wrap"
				aria-label={altText}
			>
				{enhancedText}
			</div>
		</div>
	);
};

export const Header = () => {
	const data = useCvData();
	return (
		<div className="bg-main relative flex flex-col gap-2 overflow-hidden rounded-b p-4 text-white">
			<WebsiteButton />
			<div className="relative z-10 flex flex-shrink-0 flex-grow-0 gap-4">
				<Image
					alt="candidate"
					src={candidateImage}
					className="h-[35mm] w-[35mm] rounded object-cover"
				/>
				<div className="flex w-full flex-1 flex-col justify-center">
					<h1 className="text-3xl font-bold text-[#9fd0f9]">
						{data?.personalInformation.name}
					</h1>
					<h2 className="text-lg font-bold">
						{data?.personalInformation.title}
					</h2>
					<p className="mt-2 text-sm whitespace-pre-wrap">
						{data?.personalInformation.summary}
					</p>
				</div>
			</div>
			<div className="relative z-10 flex flex-1 flex-col">
				<div className="grid w-full grid-cols-4 gap-2 px-2">
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
				className="absolute top-[-50mm] right-[-30mm] z-0 flex h-[150mm] w-[450mm]"
			/>
		</div>
	);
};

export const WebsiteButton = () => {
	const data = useCvData();
	const website = data?.website ?? "";
	const websiteName = website?.replace(/^https?:\/\//i, "");

	return (
		<div
			style={{ boxShadow: "0px 0px 15px -2px var(--color-cyan-400)" }}
			className="absolute top-[6mm] right-[4mm] z-20 flex items-center justify-center rounded-md bg-linear-to-br from-cyan-400 to-blue-500"
		>
			<div className="text-md m-[1px] rounded-md bg-zinc-900/80 px-[2mm] py-[1mm] font-semibold">
				<span className="font-normal">{`${data?.titles.moreAt} `}</span>
				<Link dark href={website}>
					{websiteName}
				</Link>
			</div>
		</div>
	);
};
