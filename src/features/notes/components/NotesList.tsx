import { t } from 'i18next';

// HOOKS
import { useNotesQuery } from 'src/features/notes/api/getNotes';

// MODELS

// COMPONENTS
import { NotesListItem } from 'src/features/notes/components/NotesListItem';

// STYLES
import s from 'src/features/notes/components/styles.module.css';

// UTILS

export const NotesList = () => {
	const controller = new AbortController();
	const { data } = useNotesQuery({ params: { signal: controller.signal } });

	if (!data) return null;

	return (
		<div className={s.notesListWrapper}>
			<p className={s.notesListCount}>
				{t('general.totalCount')}: {data.length}
			</p>
			<div className={s.notesList}>
				{data.map((note) => (
					<NotesListItem key={note.id} {...note} />
				))}
			</div>
		</div>
	);
};
