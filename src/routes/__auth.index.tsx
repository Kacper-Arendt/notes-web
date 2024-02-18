import { createFileRoute } from '@tanstack/react-router';
import { Notes } from 'src/features/notes/routes/Notes';

export const Route = createFileRoute('/__auth/')({
	component: Notes,
});
