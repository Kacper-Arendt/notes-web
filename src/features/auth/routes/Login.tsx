import { useRouter, getRouteApi, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

// HOOKS
import { useAuth } from 'src/features/auth/context/authContext';

// MODELS

// COMPONENTS

// STYLES

// UTILS

const routeApi = getRouteApi('/__public/login');

export const Login = () => {
	const { login, isAuthenticated } = useAuth();
	const router = useRouter();
	const params = routeApi.useSearch<{ redirect?: string }>();
	const navigate = useNavigate({ from: '/__public/login' });

	const loginUser = (user: string) => {
		login(user);
		router.invalidate();
	};

	useEffect(() => {
		if (isAuthenticated && params?.redirect) navigate({ to: params.redirect });
	}, [isAuthenticated, params?.redirect]);

	return (
		<div className="p-2">
			Hello from Login!
			<button type="button" onClick={() => loginUser('ad')}>
				set
			</button>
		</div>
	);
};
