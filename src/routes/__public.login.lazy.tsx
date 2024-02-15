import { createLazyFileRoute } from '@tanstack/react-router';
import { useAuth } from 'src/features/auth/context/authContext';

const Login = () => {
	const { saveUser } = useAuth();

	return (
		<div className="p-2">
			Hello from Login!
			<button type="button" onClick={() => saveUser('ad')}>
				set
			</button>
		</div>
	);
};

export const Route = createLazyFileRoute('/__public/login')({
	component: Login,
});
