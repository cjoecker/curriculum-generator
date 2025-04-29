import { JSX } from "react";
import ReactMarkdown from "react-markdown";

import { Link } from "@/components/link";

export function Markdown({ children }: { children: string }): JSX.Element {
	return (
		<ReactMarkdown
			components={{
				a: ({ node: _node, ...props }) => {
					return (
						<Link dark={false} href={props.href as never}>
							{props.children as never}
						</Link>
					);
				},
			}}
		>
			{children}
		</ReactMarkdown>
	);
}
