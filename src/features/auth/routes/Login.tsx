import { getRouteApi, useNavigate } from '@tanstack/react-router';

// COMPONENTS
import { LoginForm } from 'src/features/auth/components/LoginForm';
import { AuthLayout } from 'src/features/auth/components/AuthLayout';
import { useEffect } from 'react';
import { useAppStore } from 'src/store';

const routeApi = getRouteApi('/__public/login');

export const Login = () => {
	const { accessToken } = useAppStore();
	const params = routeApi.useSearch<{ redirect?: string }>();
	const navigate = useNavigate({ from: '/__public/login' });

	useEffect(() => {
		if (accessToken) navigate({ to: params?.redirect ?? '/' });
	}, [accessToken, params?.redirect]);

	return (
		<AuthLayout>
			<LoginForm />
		</AuthLayout>
	);
};
