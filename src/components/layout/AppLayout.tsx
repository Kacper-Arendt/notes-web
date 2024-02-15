import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';

// STYLES
import s from 'src/components/layout/appLayout.module.css';

export const AppLayout = ({ children }: { children: ReactNode }) => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<div className={s.appLayout}>
			<ErrorBoundary FallbackComponent={FallbackError}>
				<header className={s.header}>
					{/* <HeaderNavigation /> */}
					{/* <LanguageSelect /> */}
				</header>
			</ErrorBoundary>

			<ErrorBoundary FallbackComponent={FallbackError}>
				<main className={s.main}>{children}</main>
			</ErrorBoundary>
		</div>
	</ErrorBoundary>
);
