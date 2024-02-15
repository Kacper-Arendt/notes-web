import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/__auth')({
	beforeLoad: ({ context, location }) => {
		if (!context?.auth?.isAuthenticated) {
			// eslint-disable-next-line @typescript-eslint/no-throw-literal
			throw redirect({
				to: '/login',
				search: {
					redirect: location.href,
				},
			});
		}
	},
});
