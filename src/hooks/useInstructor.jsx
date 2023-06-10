import { useQuery } from '@tanstack/react-query';
const useInstructor = () => {
	const { data: instructors = [] } = useQuery({
		queryKey: ['instructor'],
		queryFn: async () => {
			const res = await fetch('instructor.json');
			return res.json();
		},
	});
	return [instructors];
};
export default useInstructor;
