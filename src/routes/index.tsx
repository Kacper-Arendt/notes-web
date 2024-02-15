import { redirect, createFileRoute } from '@tanstack/react-router';

const Index = () => (
	<div className="p-2">
		<h3>Welcome Home!</h3>
	</div>
);

export const Route = createFileRoute('/')({
	beforeLoad: ({ context, location }) => {
		if (!context.auth.isAuthenticated) {
			// eslint-disable-next-line @typescript-eslint/no-throw-literal
			throw redirect({
				to: '/login',
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: Index,
});
