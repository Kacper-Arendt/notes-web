import { createFileRoute, redirect } from '@tanstack/react-router';

const isAuthenticated = () => true;

export const Route = createFileRoute('/_authenticated')({
	beforeLoad: async ({ location }) => {
		if (!isAuthenticated()) {
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
