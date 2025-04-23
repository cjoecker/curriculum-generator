import { LANGUAGES } from "../constants/curriculum-information";

import { Title } from "./title";

export const Languages = () => {
	return (
		<div className="mb-4 flex flex-col">
			<Title label="Languages" />
			{LANGUAGES.map((l) => {
				return (
					<div className="flex-1" key={l.language}>
						<span className="font-bold">{`${l.language}: `}</span>
						<span className="whitespace-pre-wrap">{l.level}</span>
					</div>
				);
			})}
		</div>
	);
};
