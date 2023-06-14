import { useQuery } from '@tanstack/react-query';

const useRequestInstructor = () => {
	const { data: InstructorRequest = [], refetch } = useQuery({
		queryKey: ['requestInstructor'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/payments');
			return res.json();
		},
	});
	return [InstructorRequest, refetch];
};

export default useRequestInstructor;
