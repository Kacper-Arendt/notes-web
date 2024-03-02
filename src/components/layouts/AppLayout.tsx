import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';
import { Header } from 'src/components/layouts/Header';

// STYLES
import s from 'src/components/layouts/appLayout.module.css';

export const AppLayout = ({ children }: { children: ReactNode }) => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<div className={s.appLayout}>
			<Header />

			<ErrorBoundary FallbackComponent={FallbackError}>
				<main className={s.main}>{children}</main>
			</ErrorBoundary>
		</div>
	</ErrorBoundary>
);
