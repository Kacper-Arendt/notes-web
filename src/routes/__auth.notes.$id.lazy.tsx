import { createLazyFileRoute } from '@tanstack/react-router';

// COMPONENTS
import { Note } from 'src/features/notes/routes/Note';

export const Route = createLazyFileRoute('/__auth/notes/$id')({
	component: Note,
});
