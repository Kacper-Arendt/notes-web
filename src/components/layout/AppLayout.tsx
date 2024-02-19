import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';
import { Menu } from 'src/components/layout/Menu';

// STYLES
import s from 'src/components/layout/appLayout.module.css';

export const AppLayout = ({ children }: { children: ReactNode }) => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<div className={s.appLayout}>
			<Menu />

			<ErrorBoundary FallbackComponent={FallbackError}>
				<main className={s.main}>{children}</main>
			</ErrorBoundary>
		</div>
	</ErrorBoundary>
);
