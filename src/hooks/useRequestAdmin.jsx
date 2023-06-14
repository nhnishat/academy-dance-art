import { useQuery } from '@tanstack/react-query';

const useRequestAdmin = () => {
	const { data: adminRequest = [], refetch } = useQuery({
		queryKey: ['requestadmin'],
		queryFn: async () => {
			const res = await fetch(
				'https://academy-of-dace-art-server.vercel.app/requestadmin'
			);
			return res.json();
		},
	});
	return [adminRequest, refetch];
};

export default useRequestAdmin;
