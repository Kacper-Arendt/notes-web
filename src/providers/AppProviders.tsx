import { QueryClientProvider } from '@tanstack/react-query';

// HOOKS
import { LangContextProvider } from 'src/shared/internalization/langContext';

// LIBS
import { queryClient } from 'src/libs/reactQuery';
import { initializeI18n } from 'src/libs/i18n';

initializeI18n();

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<LangContextProvider>{children}</LangContextProvider>
	</QueryClientProvider>
);
