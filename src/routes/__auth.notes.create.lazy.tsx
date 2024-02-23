import { createLazyFileRoute } from '@tanstack/react-router';

// COMPONENTS
import { CreateNote } from 'src/features/notes/routes/CreateNote';

export const Route = createLazyFileRoute('/__auth/notes/create')({
	component: CreateNote,
});
