// HOOKS
import { useNotesQuery } from 'src/features/notes/api/getNotes';

// MODELS

// COMPONENTS

// STYLES

// UTILS

export const NotesList = () => {
	const controller = new AbortController();
	const { data } = useNotesQuery({ params: { signal: controller.signal } });

	if (!data) return null;

	return (
		<>
			{data.map((note) => (
				<div key={note.id}>
					<p>{note.name}</p>
					<p>{note.content}</p>
				</div>
			))}
		</>
	);
};
