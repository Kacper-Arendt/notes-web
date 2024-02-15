import { t } from 'i18next';

// STYLES
import s from 'src/components/errors/fallbackError.module.css';

export const FallbackError = () => (
	<div className={s.fallbackError}>
		<h2 className={s.title}>{t('errors.fallbackErrorMessage')}</h2>
	</div>
);
