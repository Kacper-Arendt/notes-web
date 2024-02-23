import { createLazyFileRoute } from '@tanstack/react-router';

// COMPONENTS

export const Route = createLazyFileRoute('/__auth/notes/$id')({
	// component: Note,
	component: () => <p>update</p>,
});
