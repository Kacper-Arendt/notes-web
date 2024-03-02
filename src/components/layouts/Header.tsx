import clsx from 'clsx';
import { IoMdPower } from 'react-icons/io';
import { Link, useNavigate } from '@tanstack/react-router';
import { t } from 'i18next';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useAuth } from 'src/features/auth/context/authContext';
import { useAppStore } from 'src/store';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';
import { ToggleMenuButton } from 'src/components/buttons/ToggleMenuButton';

// STYLES
import s from 'src/components/layouts/appLayout.module.css';

const routes = [
	{ to: '/', title: t('routes.notes') },
	{ to: 'tasks', title: t('routes.tasks') },
];

export const Header = () => {
	const { toggleSidebarNavOpen, sidebarNavOpen } = useAppStore();
	const { logout } = useAuth();
	const navigate = useNavigate();

	const onLogout = () => {
		logout();
		navigate({ to: '/login' });
	};

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<header className={s.header}>
				<ToggleMenuButton
					isOpen={sidebarNavOpen}
					setIsOpen={() => toggleSidebarNavOpen(!sidebarNavOpen)}
					className={s.toggleMenuButton}
				/>

				<nav className={clsx(s.menuNav, {})}>
					{routes.map(({ to, title }) => (
						<Link to={to} key={to} className={s.navLink}>
							{title}
						</Link>
					))}
				</nav>

				<button type="button" onClick={onLogout} className="ml-auto" aria-label={t('general.logout')}>
					<IoMdPower className="ease-in duration-200 hover:fill-primary text-xl" />
				</button>
			</header>
		</ErrorBoundary>
	);
};
