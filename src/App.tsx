import { createRouter, RouterProvider } from '@tanstack/react-router';

// ROUTES
import { useAuth } from 'src/features/auth/context/authContext';
import { routeTree } from 'src/routeTree.gen';

const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
	context: {
		auth: undefined,
	},
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const App = () => {
	const auth = useAuth();

	return <RouterProvider router={router} context={{ auth }} />;
};

export default App;
