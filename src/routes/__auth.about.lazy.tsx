import { createLazyFileRoute } from '@tanstack/react-router';
import { useAuth } from 'src/features/auth/context/authContext';

const About = () => {
	const { deleteUser } = useAuth();

	return (
		<div className="p-2">
			Hello from About!
			<button type="button" onClick={() => deleteUser()}>
				set
			</button>
		</div>
	);
};

export const Route = createLazyFileRoute('/__auth/about')({
	component: About,
});
