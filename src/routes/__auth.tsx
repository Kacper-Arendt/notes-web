import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { AppLayout } from 'src/components/layouts/AppLayout';

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
	component: () => (
		<AppLayout>
			<Outlet />
		</AppLayout>
	),
});
