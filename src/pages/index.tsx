import { Quicksand } from "next/font/google";
import { ReactNode } from "react";

import { Education } from "@/components/education";
import { Header } from "@/components/header";
import { Hobbies } from "@/components/hobbies";
import { Languages } from "@/components/languagues";
import { WorkExperience } from "@/components/work-experience";
import { formatDate } from "@/utils/format-date";
import candidateImage from "../../public/images/mesh-purple-turquoise.svg";
import Image from "next/image";
import * as React from "react";

const quicksandSans = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin"],
});

export const Box = ({ children }: { children: ReactNode | ReactNode[] }) => {
	return <div className="m-5 flex">{children}</div>;
};

export default function Home() {
	return (
		<div
			className={`flex h-screen w-screen ${quicksandSans.className} font-quicksand text-gray-50`}
		>
			<div className="bg-main relative mx-auto h-[296mm] w-[210mm] p-[2mm] overflow-hidden">
				<div className="relative z-10">
					<Box>
						<Header />
					</Box>
					<div className="flex">
						<div className="min-w-[145mm]">
							<Box>
								<WorkExperience />
							</Box>
						</div>
						<div>
							<Box>
								<Education />
							</Box>
							<Box>
								<Languages />
							</Box>
							<Box>
								<Hobbies />
							</Box>
						</div>
					</div>
				</div>
				<div className="absolute bottom-3 left-0 flex w-full justify-between px-[6mm] italic">
					<div className="opacity-70">
						Handcrafted with <span className="not-italic">♥</span> and React
					</div>
					<div className="">
						Last updated on {formatDate(new Date(), true)}
					</div>
				</div>
				<Image
					aria-hidden={true}
					alt={""}
					src={candidateImage}
					className="absolute flex right-[-50mm] top-[-230mm] z-0 h-[700mm] w-[1700mm]"
				/>
			</div>
		</div>
	);
}
