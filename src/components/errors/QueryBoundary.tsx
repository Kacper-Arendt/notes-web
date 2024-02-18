import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ReactNode, Suspense } from 'react';

// COMPONENTS
import { Loader } from 'src/components/loader';
import { t } from 'i18next';

const ErrorView = ({ error, resetErrorBoundary }: FallbackProps) => (
	<div>
		<div>{error.message}</div>
		<button type="button" onClick={resetErrorBoundary}>
			{t('general.retry')}
		</button>
	</div>
);

const LoadingView = () => <Loader size="md" />;

export const QueryBoundaries = ({ children }: { children: ReactNode }) => (
	<QueryErrorResetBoundary>
		{({ reset }) => (
			<ErrorBoundary onReset={reset} FallbackComponent={ErrorView}>
				<Suspense fallback={<LoadingView />}>{children}</Suspense>
			</ErrorBoundary>
		)}
	</QueryErrorResetBoundary>
);
