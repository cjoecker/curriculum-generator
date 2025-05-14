export const Title = ({ label }: { label: string | undefined }) => {
	return (
		<h3 className="text-subtitle mb-1 text-lg font-bold uppercase">{label}</h3>
	);
};
