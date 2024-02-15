import { createRouter, RouterProvider } from '@tanstack/react-router';

// HOOKS
import { useLangContext } from 'src/shared/internalization/langContext';

// ROUTES
import { useAuth } from 'src/features/auth/context/authContext';
import { routeTree } from './routeTree.gen';

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
	const { onLangChange } = useLangContext();
	console.log(onLangChange);
	const auth = useAuth();

	return (
		<>
			<RouterProvider router={router} context={{ auth }} />
		</>
	);
};

export default App;
