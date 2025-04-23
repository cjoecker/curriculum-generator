import Image from "next/image";
import * as React from "react";

import candidateImage from "../../public/images/candidate-image.jpeg";

import { Link } from "./link";
import { useCvData } from '@/utils/use-cv-data'


interface Props {
	icon: string;
	text: string;
	href?: string;
	altText: string;
}

export const PersonalInformationItem = ({
	icon,
	text,
	href,
	altText,
}: Props) => {
	const iconSrc = `./images/${icon}.svg`;
	const enhancedText = href ? <Link href={href}>{text}</Link> : <>{text}</>;

	return (
		<div className="flex">
			<div className="bg-information-circle my-auto flex h-8 min-w-[2rem] justify-center rounded-full">
				<Image
					width={24}
					height={24}
					src={iconSrc}
					alt={altText}
					className="m-auto h-5 w-5"
				/>
			</div>
			<div className="my-auto ml-2 leading-4 leading-5 whitespace-pre-wrap">
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
					<h1 className="text-3xl font-bold text-sky-800">
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
