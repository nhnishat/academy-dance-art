import { useQuery } from '@tanstack/react-query';
const useInstructors = () => {
	const { data: instructors = [] } = useQuery({
		queryKey: ['instructor'],
		queryFn: async () => {
			const res = await fetch(
				'https://academy-of-dace-art-server.vercel.app/instructors'
			);
			return res.json();
		},
	});
	return [instructors];
};
export default useInstructors;
