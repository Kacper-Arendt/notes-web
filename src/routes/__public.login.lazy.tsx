import { createLazyFileRoute } from '@tanstack/react-router';

import { Login } from 'src/features/auth/routes/Login';

export const Route = createLazyFileRoute('/__public/login')({
	component: Login,
});
