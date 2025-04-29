import { Quicksand } from "next/font/google";
import * as React from "react";

import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hobbies } from "@/components/hobbies";
import { Languages } from "@/components/languagues";
import { WorkExperience } from "@/components/work-experience";
import { formatDate } from "@/utils/format-date";

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
					<div className="mt-1 flex gap-6 px-6 py-2">
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
				<Footer />
			</div>
		</div>
	);
}
