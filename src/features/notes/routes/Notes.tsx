// COMPONENTS
import { NotesList } from 'src/features/notes/components/NotesList';
import { QueryBoundaries } from 'src/components/errors/QueryBoundary';

export const Notes = () => (
	<QueryBoundaries>
		<NotesList />
	</QueryBoundaries>
);
