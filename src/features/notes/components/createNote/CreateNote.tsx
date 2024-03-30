import { t } from 'i18next';

// CONTEXT
import { useNotesContext } from 'src/features/notes/context/notesContext';

// HOOKS
import { useCreateNote } from 'src/features/notes/api/createNote';

// MODELS
import { CreateNoteResponseInterface } from 'src/features/notes/models';

// COMPONENTS
import { CreateNoteForm } from 'src/features/notes/components/createNote/CreateNoteForm';

export const CreateNote = () => {
	const { setActiveNote } = useNotesContext();
	const { mutate: addNote, isPending } = useCreateNote();

	const onSuccess = (res: CreateNoteResponseInterface) => setActiveNote(res.id);

	return (
		<div className="p-4">
			<div className="flex flex-col gap-3 rounded-md border border-zinc-700 shadow-2xl p-4">
				<p className="text-xl font-semibold text-primary">{t('general.addNote')}</p>
				<CreateNoteForm onSubmit={(data) => addNote(data, { onSuccess })} isPending={isPending} />
			</div>
		</div>
	);
};
