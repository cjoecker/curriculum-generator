
import { Title } from "./title";
import { useCvData } from '@/utils/use-cv-data'

export const Hobbies = () => {
	const data = useCvData();
	return (
		<div className="flex flex-col">
			<Title label="Hobbies & Projects" />
			{data?.hobbies}
		</div>
	);
};
