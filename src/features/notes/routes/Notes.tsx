// COMPONENTS
import { NotesList } from 'src/features/notes/components/NotesList';
import { QueryBoundaries } from 'src/components/errors/QueryBoundary';
import { NotesListHeader } from 'src/features/notes/components/NotesListHeader';
import { NotesListContainer } from 'src/features/notes/components/NotesListContainer';

export const Notes = () => (
	<QueryBoundaries>
		<NotesListContainer>
			<NotesListHeader />
			<NotesList />
		</NotesListContainer>
	</QueryBoundaries>
);
