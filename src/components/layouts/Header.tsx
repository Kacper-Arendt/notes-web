import clsx from 'clsx';
import { Link } from '@tanstack/react-router';
import { t } from 'i18next';
import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';

// STYLES
import s from 'src/components/layouts/appLayout.module.css';
import { ToggleMenuButton } from 'src/components/buttons/ToggleMenuButton';
import { useAppStore } from 'src/store';

const routes = [
	{ to: '/', title: t('routes.notes') },
	{ to: 'tasks', title: t('routes.tasks') },
];

export const Header = () => {
	const { toggleSidebarNavOpen, sidebarNavOpen } = useAppStore();

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
			</header>
		</ErrorBoundary>
	);
};
