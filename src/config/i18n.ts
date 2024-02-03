import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// TRANSLATIONS
import en from 'src/assets/translations/en.json';
import pl from 'src/assets/translations/pl.json';

const resources = {
	en: {
		translation: en,
	},
	pl: {
		translation: pl,
	},
};

i18next.use(initReactI18next).init({
	resources,
	lng: 'en',
});

export default i18next;
