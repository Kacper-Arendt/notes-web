import clsx from 'clsx';
import { t } from 'i18next';
import { FaRegStickyNote } from 'react-icons/fa';

// CONTEXT
import { useNotesContext } from 'src/features/notes/context/notesContext';

// STYLES
import s from 'src/features/notes/components/styles.module.css';

export const NotesListHeader = () => {
	const { setActiveNote, activeNote } = useNotesContext();

	return (
		<div className={s.notesListHeader}>
			<button type="button" onClick={() => setActiveNote(null)} aria-label={t('general.add')} className="text-xl ml-auto">
				<FaRegStickyNote className={clsx('ease-in duration-200 hover:fill-primary', { 'fill-primary': !activeNote })} />
			</button>
		</div>
	);
};
