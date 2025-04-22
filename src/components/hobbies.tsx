import { HOBBIES } from "../constants/curriculum-information";

import { Title } from "./title";

export const Hobbies = () => {
	return (
		<div className="flex flex-col">
			<Title label="Hobbies & Projects" />
			{HOBBIES}
		</div>
	);
};
