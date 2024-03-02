// CONTEXT
import { useNotesContext } from 'src/features/notes/context/notesContext';

// HOOKS
import { useNotesQuery } from 'src/features/notes/api/getNotes';

// MODELS

// COMPONENTS
import { NotesListItem } from 'src/features/notes/components/NotesListItem';

// STYLES
import s from 'src/features/notes/components/styles.module.css';
import { useAppStore } from 'src/store';
import { useSortByDates } from 'src/shared/hooks/useSortByDates';

export const NotesList = () => {
	const controller = new AbortController();
	const { data } = useNotesQuery({ params: { signal: controller.signal } });
	const { setActiveNote, activeNote, sortBy } = useNotesContext();
	const { toggleSidebarNavOpen } = useAppStore();
	const sortedByDate = useSortByDates(data ?? [], sortBy);

	const onNoteClick = (id: string) => {
		setActiveNote(id);
		toggleSidebarNavOpen(false);
	};

	if (!data) return null;

	return (
		<div className={s.notesListWrapper}>
			<div className={s.notesList}>
				{sortedByDate.map((note) => (
					<button key={note.id} type="button" onClick={() => onNoteClick(note.id)}>
						<NotesListItem {...note} active={note.id === activeNote} />
					</button>
				))}
			</div>
		</div>
	);
};
