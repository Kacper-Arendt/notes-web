import { createLazyFileRoute } from '@tanstack/react-router';

import { Register } from 'src/features/auth/routes/Register';

export const Route = createLazyFileRoute('/__public/register')({
	component: Register,
});
