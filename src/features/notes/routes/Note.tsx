import { useParams } from '@tanstack/react-router';
import { QueryBoundaries } from 'src/components/errors/QueryBoundary';

// HOOKS
import { useNoteQuery } from 'src/features/notes/api/getNote';
import { useUpdateNote } from 'src/features/notes/api/updateNote';

// COMPONENTS
import { NoteSaveForm } from 'src/features/notes/components/NoteSaveForm';

export const Note = () => {
	const params = useParams<any>({ strict: false });
	const { data } = useNoteQuery({ params: { id: params?.id ?? '' } });
	const { mutate: update } = useUpdateNote();

	if (!data) return null;

	return (
		<QueryBoundaries>
			<NoteSaveForm defaultValues={data} onSubmit={(updatedNote) => update(Object.assign(data, updatedNote))} />
		</QueryBoundaries>
	);
};
