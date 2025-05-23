import { Red_Hat_Display } from "next/font/google";
import Head from "next/head";
import * as React from "react";

import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hobbies } from "@/components/hobbies";
import { Languages } from "@/components/languagues";
import { WorkExperience } from "@/components/work-experience";
import { useCvData } from "@/utils/use-cv-data";

const quicksandSans = Red_Hat_Display({
	variable: "--font-main",
	subsets: ["latin"],
});

export default function Home() {
	const data = useCvData();
	return (
		<div
			className={`flex h-screen w-screen ${quicksandSans.className} font-quicksand`}
		>
			<Head>
				<title>{data?.documentTitle}</title>
			</Head>
			<div className="relative mx-auto h-[296mm] w-[210mm] overflow-hidden">
				<div className="relative z-10">
					<Header />
					<div className="mt-1 flex gap-6 px-6 py-2">
						<div className="w-[660mm]">
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
