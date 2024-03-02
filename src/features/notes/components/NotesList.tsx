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

export const NotesList = () => {
	const controller = new AbortController();
	const { data } = useNotesQuery({ params: { signal: controller.signal } });
	const { setActiveNote, activeNote } = useNotesContext();
	const { toggleSidebarNavOpen } = useAppStore();

	const onNoteClick = (id: string) => {
		setActiveNote(id);
		toggleSidebarNavOpen(false);
	};

	if (!data) return null;

	return (
		<div className={s.notesListWrapper}>
			<div className={s.notesList}>
				{data.map((note) => (
					<button type="button" onClick={() => onNoteClick(note.id)}>
						<NotesListItem key={note.id} {...note} active={note.id === activeNote} />
					</button>
				))}
			</div>
		</div>
	);
};
