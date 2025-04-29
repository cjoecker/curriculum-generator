interface Props {
	children: string;
	href: string;
}

export const Link = ({ children, href }: Props) => {
	return (
		<a
			className="thin-underline underline"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);
};
