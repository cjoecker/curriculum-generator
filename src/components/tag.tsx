export type Props = {
	children: string | React.ReactNode;
	circularSize?: number;
};
export const Tag = ({ children, circularSize }: Props) => {
	return (
		<div
			style={{
				width: circularSize,
				height: circularSize,
			}}
			className={"from-neutral to-neutral-dark rounded-full border-1 border-solid border-white/20 bg-linear-to-br px-1.5 py-0.5 text-sm capitalize flex align-middle justify-center"}
		>
			{children}
		</div>
	);
};
