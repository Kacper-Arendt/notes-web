import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors/FallbackError';

// STYLES
import s from 'src/features/auth/components/styles.module.css';

export const FormWrapper = ({ children, title }: { children: ReactNode; title: string }) => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<div className={s.registerFormWrapper}>
			<h1 className={s.formHeading}>{title}</h1>
			{children}
		</div>
	</ErrorBoundary>
);
