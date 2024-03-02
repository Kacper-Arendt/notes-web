import i18n from 'i18next';

const locales = {
	pl: 'pl-PL',
	en: 'en-US',
};

export const useDateTime = () => {
	const lang = i18n.language;
	const currentLocale = locales[lang as keyof typeof locales] || locales.en;

	const formatDate = (date: Date) =>
		date.toLocaleDateString(currentLocale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

	const formatTime = (date: Date) =>
		date.toLocaleTimeString(currentLocale, {
			hour: 'numeric',
			minute: 'numeric',
		});

	return { formatDate, formatTime };
};
