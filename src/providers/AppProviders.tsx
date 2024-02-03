// REDUX

// HOOKS
import { LangContextProvider } from 'src/shared/internalization/langContext';

// MODELS

// COMPONENTS

// STYLES

// UTILS

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return <LangContextProvider>{children}</LangContextProvider>;
};
