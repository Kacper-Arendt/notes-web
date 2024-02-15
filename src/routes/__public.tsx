import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/__public')({
	beforeLoad: ({ context }) => {
		if (context?.auth?.isAuthenticated) {
			// eslint-disable-next-line @typescript-eslint/no-throw-literal
			throw redirect({
				to: '/',
			});
		}
	},
});
