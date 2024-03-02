import { ReactNode } from 'react';

// COMPONENTS
import { QueryBoundaries } from 'src/components/errors/QueryBoundary';
import { LeftSidebar } from 'src/components/layouts/mainLayout/LeftSidebar';
import { Main } from 'src/components/layouts/mainLayout/Main';

export const Layout = ({ children }: { children: ReactNode }) => (
	<QueryBoundaries>
		<div className="flex w-full">{children}</div>
	</QueryBoundaries>
);

Layout.LeftSidebar = LeftSidebar;
Layout.Main = Main;
