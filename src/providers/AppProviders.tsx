import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

// HOOKS
import { LangContextProvider } from 'src/shared/internalization/langContext';

// LIBS
import { queryClient } from 'src/libs/reactQuery';
import { initializeI18n } from 'src/libs/i18n';
import { AuthProvider } from 'src/features/auth/context/authContext';

initializeI18n();

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<LangContextProvider>
			<AuthProvider>{children}</AuthProvider>
			<ToastContainer />
		</LangContextProvider>
	</QueryClientProvider>
);
