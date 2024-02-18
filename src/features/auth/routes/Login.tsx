import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

// HOOKS
import { useAuth } from 'src/features/auth/context/authContext';

// COMPONENTS
import { LoginForm } from 'src/features/auth/components/LoginForm';
import { AuthLayout } from 'src/features/auth/components/AuthLayout';

const routeApi = getRouteApi('/__public/login');

export const Login = () => {
	const { isAuthenticated } = useAuth();
	const params = routeApi.useSearch<{ redirect?: string }>();
	const navigate = useNavigate({ from: '/__public/login' });

	useEffect(() => {
		if (isAuthenticated) navigate({ to: params?.redirect ?? '/' });
	}, [isAuthenticated, params?.redirect]);

	return (
		<AuthLayout>
			<LoginForm />
		</AuthLayout>
	);
};
