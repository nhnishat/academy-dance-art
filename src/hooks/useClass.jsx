import { useQuery } from '@tanstack/react-query';

const useClass = () => {
	const { data: enrollClass = [], refetch } = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/class');
			return res.json();
		},
	});
	return [enrollClass, refetch];
};

export default useClass;
