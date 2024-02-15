import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

// COMPONENTS
import { AppLayout } from 'src/components/layout/AppLayout';
import { AuthContextInterface } from 'src/features/auth/context/authContext';

interface MyRouterContext {
	auth: AuthContextInterface | undefined;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<AppLayout>
			<Outlet />
			<TanStackRouterDevtools />
		</AppLayout>
	),
});
