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
			className={`${dark ? "border-white/30 from-[#20111e] to-[#383838]" : "border-black/20 from-[#f5f5f5] to-[#dbe6e9]"} flex justify-center rounded-full border-1 border-solid bg-linear-to-br px-1.5 py-0.5 align-middle text-sm capitalize`}
		>
			{children}
		</div>
	);
};
