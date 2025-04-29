import { formatDate } from "@/utils/format-date";

export function Footer() {
	return (
		<div className="absolute bottom-3 left-0 flex w-full justify-between px-6 italic">
			<div className="opacity-70">
				Handcrafted with <span className="not-italic">♥</span> and React
			</div>
			<div className="">Last updated on {formatDate(new Date(), true)}</div>
		</div>
	);
}
