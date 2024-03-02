import { ReactNode } from 'react';
import clsx from 'clsx';

// STORE
import { useAppStore } from 'src/store';

// STYLES
import s from 'src/components/layouts/mainLayout/styles.module.css';

// COMPONENTS
import { ToggleMenuButton } from 'src/components/buttons/ToggleMenuButton';

export const LeftSidebar = ({ children }: { children: ReactNode }) => {
	const { sidebarNavOpen, toggleSidebarNavOpen } = useAppStore();

	return (
		<aside className={clsx(s.aside, { [s.asideOpen]: sidebarNavOpen })}>
			<div className={s.header}>
				<ToggleMenuButton isOpen={sidebarNavOpen} setIsOpen={() => toggleSidebarNavOpen(!sidebarNavOpen)} />
			</div>
			<div className={clsx(s.asideContent)}>{children}</div>
		</aside>
	);
};
