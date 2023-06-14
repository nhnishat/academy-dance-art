import { useQuery } from '@tanstack/react-query';

const useClass = () => {
	const { data: enrollClass = [], refetch } = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const res = await fetch(
				'https://academy-of-dace-art-server.vercel.app/class'
			);
			return res.json();
		},
	});
	return [enrollClass, refetch];
};

export default useClass;
