// COMPONENTS
import { NotesList } from 'src/features/notes/components/NotesList';
import { NotesListHeader } from 'src/features/notes/components/NotesListHeader';
import { Layout } from 'src/components/layouts/mainLayout';
import { CreateNote } from 'src/features/notes/components/createNote';
import { Note } from 'src/features/notes/components/note';

// CONTEXT
import { NotesContextProvider, useNotesContext } from 'src/features/notes/context/notesContext';

const NotesContainer = () => {
	const { activeNote } = useNotesContext();

	return (
		<Layout>
			<Layout.LeftSidebar>
				<NotesListHeader />
				<NotesList />
			</Layout.LeftSidebar>
			<Layout.Main>{activeNote ? <Note id={activeNote} /> : <CreateNote />}</Layout.Main>
		</Layout>
	);
};

export const Notes = () => (
	<NotesContextProvider>
		<NotesContainer />
	</NotesContextProvider>
);
