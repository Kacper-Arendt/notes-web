import { useLangContext } from 'src/shared/internalization/langContext';
import { t } from 'i18next';

const App = () => {
	const { onLangChange } = useLangContext();

	return (
		<>
			<p>{t('general.submit')}</p>

			<button onClick={() => onLangChange('pl')}>PL</button>
			<button onClick={() => onLangChange('en')}>EN</button>
		</>
	);
};

export default App;
