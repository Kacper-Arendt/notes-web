import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ToastContainer } from 'react-toastify';

// COMPONENTS
import { AppLayout } from 'src/components/layout/AppLayout';
import { AuthContextInterface } from 'src/features/auth/models';

interface MyRouterContext {
	auth: AuthContextInterface | undefined;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<AppLayout>
			<Outlet />
			<TanStackRouterDevtools />
			<ToastContainer />
		</AppLayout>
	),
	// todo add not found
	notFoundComponent: () => <p>Not found</p>,
});
