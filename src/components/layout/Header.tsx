import { ErrorBoundary } from 'react-error-boundary';
import { Link } from '@tanstack/react-router';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';

// HOOKS
import { useAuth } from 'src/features/auth/context/authContext';

// STYLES
import s from 'src/components/layout/appLayout.module.css';

const routes = [
	// PROTECTED
	{ to: '/', title: 'Notes', protected: true },
	{ to: 'tasks', title: 'Tasks', protected: true },

	// PUBLIC
	{ to: 'login', title: 'Login', protected: false },
	{ to: 'register', title: 'Register', protected: false },
];

export const Header = () => {
	const { isAuthenticated } = useAuth();

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<header className={s.header}>
				<nav className={s.headerNav}>
					{routes
						.filter((el) => el.protected === isAuthenticated)
						.map(({ to, title }) => (
							<Link to={to} key={to} className={s.navLink}>
								{title}
							</Link>
						))}
				</nav>
			</header>
		</ErrorBoundary>
	);
};
