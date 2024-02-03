import { useTranslation } from 'react-i18next';
import { createContext, useContext } from 'react';

const languages = ['en', 'pl'] as const;
export type LangTypes = (typeof languages)[number];

export const useLanguageContext = () => {
	const { i18n } = useTranslation();

	const onLangChange = (lang: LangTypes) => {
		i18n.changeLanguage(lang);
	};

	return { onLangChange, languages, language: i18n.language };
};

const ContextData = createContext({} as ReturnType<typeof useLanguageContext>);
export const useLangContext = () => useContext(ContextData);

export const LangContextProvider = ({ children }: { children: React.ReactNode }) => (
	<ContextData.Provider value={useLanguageContext()}>{children}</ContextData.Provider>
);
