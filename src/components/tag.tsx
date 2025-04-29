export type Props = {
	children: string | React.ReactNode;
	circularSize?: number;
	dark?: boolean;
};
export const Tag = ({ children, circularSize, dark }: Props) => {
	return (
		<div
			style={{
				width: circularSize,
				height: circularSize,
			}}
			className={`${dark ? "from-[#20111e] to-[#383838] border-white/30" : "from-[#dbe6e9] to-[#ffffff] border-black/20"} rounded-full border-1 border-solid  bg-linear-to-br px-1.5 py-0.5 text-sm capitalize flex align-middle justify-center`}
		>
			{children}
		</div>
	);
};
