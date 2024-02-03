import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TRANSLATIONS
import en from 'src/assets/translations/en.json';
import pl from 'src/assets/translations/pl.json';

export const fallbackLng = 'en';

export const initializeI18n = () => {
	i18n.use(initReactI18next).init({
		resources: {
			en: { translation: { ...en } },
			pl: { translation: { ...pl } },
		},
		fallbackLng,
		debug: false,
	});
};
