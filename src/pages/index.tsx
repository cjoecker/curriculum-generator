import { Quicksand } from "next/font/google";

import { Education } from "@/components/education";
import { Header } from "@/components/header";
import { Hobbies } from "@/components/hobbies";
import { Languages } from "@/components/languagues";
import { WorkExperience } from "@/components/work-experience";
import { formatDate } from "@/utils/format-date";
import * as React from "react";

const quicksandSans = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div
			className={`flex h-screen w-screen ${quicksandSans.className} font-quicksand`}
		>
			<div className="relative mx-auto h-[296mm] w-[210mm] overflow-hidden">
				<div className="relative z-10">
					<Header />
					<div className="flex gap-6 px-6 mt-1 py-2">
						<div className="min-w-[145mm]">
							<WorkExperience />
						</div>
						<div className="flex flex-col gap-4">
							<Education />
							<Languages />
							<Hobbies />
						</div>
					</div>
				</div>
				<div className="absolute bottom-3 left-0 flex w-full justify-between px-6 italic">
					<div className="opacity-70">
						Handcrafted with <span className="not-italic">♥</span> and React
					</div>
					<div className="">Last updated on {formatDate(new Date(), true)}</div>
				</div>
			</div>
		</div>
	);
}
