import { Link } from '@tanstack/react-router';
import { t } from 'i18next';

// STYLES
import s from 'src/features/notes/components/styles.module.css';

export const NotesListHeader = () => (
	<div className={s.notesListHeader}>
		<Link to="notes/create">{t('general.add')}</Link>
	</div>
);
