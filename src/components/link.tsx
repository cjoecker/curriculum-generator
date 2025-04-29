interface Props {
	children: string;
	href: string;
	dark?: boolean;
}

export const Link = ({ children, href, dark }: Props) => {
	return (
		<a
			className={`thin-underline underline ${dark ? "light" : "dark"}`}
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);
};
