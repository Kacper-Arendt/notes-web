import { ErrorBoundary } from 'react-error-boundary';
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
import { t } from 'i18next';

// HOOKS
import { useToggle } from 'src/shared/hooks/useToggle';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';
import { ToggleMenuButton } from 'src/components/buttons/ToggleMenuButton';

// HOOKS
import { useAuth } from 'src/features/auth/context/authContext';

// STYLES
import s from 'src/components/layout/appLayout.module.css';

const routes = [
	// PROTECTED
	{ to: '/', title: t('routes.notes'), protected: true },
	{ to: 'tasks', title: t('routes.tasks'), protected: true },

	// PUBLIC
	{ to: 'login', title: t('routes.login'), protected: false },
	{ to: 'register', title: t('routes.register'), protected: false },
];

export const Menu = () => {
	const { isAuthenticated } = useAuth();
	const { on, toggle } = useToggle();

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<ToggleMenuButton isOpen={on} setIsOpen={toggle} className={s.toggleButton} />
			<aside className={clsx(s.menu, { [s.menuOpen]: on })}>
				<nav className={clsx(s.menuNav, { [s.menuNavOpen]: on })}>
					{routes
						.filter((el) => el.protected === isAuthenticated)
						.map(({ to, title }) => (
							<Link to={to} key={to} className={s.navLink}>
								{title}
							</Link>
						))}
				</nav>
			</aside>
		</ErrorBoundary>
	);
};
