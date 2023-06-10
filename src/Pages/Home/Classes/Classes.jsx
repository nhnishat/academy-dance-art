import useClasses from '../../../hooks/useClasses';

const Classes = () => {
	const [classes] = useClasses();
	console.log(classes);
	return <div></div>;
};

export default Classes;
