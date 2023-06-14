import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
	const { data: classes = [] } = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const res = await fetch(
				'https://academy-of-dace-art-server.vercel.app/classes'
			);
			return res.json();
		},
	});
	return [classes];
};

export default useClasses;
