import { ErrorBoundary } from 'react-error-boundary';
import { Link } from '@tanstack/react-router';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';

// HOOKS
import { useAuth } from 'src/features/auth/context/authContext';

// STYLES
import s from 'src/components/layout/appLayout.module.css';
import { t } from 'i18next';

const routes = [
	// PROTECTED
	{ to: '/', title: t('routes.notes'), protected: true },
	{ to: 'tasks', title: t('routes.tasks'), protected: true },

	// PUBLIC
	{ to: 'login', title: t('routes.login'), protected: false },
	{ to: 'register', title: t('routes.register'), protected: false },
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
