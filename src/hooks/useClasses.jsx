import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
	const { data: classes = [] } = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const res = await fetch('classes.json');
			return res.json();
		},
	});
	return [classes];
};

export default useClasses;
