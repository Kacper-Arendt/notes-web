import { t } from 'i18next';
import clsx from 'clsx';
import { MdDeleteOutline } from 'react-icons/md';

// HOOKS
import { useNoteQuery } from 'src/features/notes/api/getNote';
import { useUpdateNote } from 'src/features/notes/api/updateNote';
import { useDeleteNote } from 'src/features/notes/api/deleteNote';
import { useNotesContext } from 'src/features/notes/context/notesContext';

// COMPONENTS
import { NoteForm } from 'src/features/notes/components/note/NoteForm';
import { DateTime } from 'src/components/dateTime/DateTime';

export const Note = ({ id }: { id: string }) => {
	const { setActiveNote } = useNotesContext();
	const { data } = useNoteQuery({ params: { id } });
	const { mutate: update } = useUpdateNote();
	const { mutate: remove } = useDeleteNote();

	console.log(data);

	if (!data) return null;

	return (
		<div className="p-4">
			<div className="flex flex-col gap-3 rounded-md border border-zinc-700 shadow-2xl p-4">
				<div className="flex gap-2 justify-end">
					<button
						type="button"
						onClick={() => remove(id, { onSuccess: () => setActiveNote(null) })}
						aria-label={t('general.add')}
						className="text-xl"
					>
						<MdDeleteOutline className={clsx('ease-in duration-200 hover:fill-primary')} />
					</button>
				</div>
				<NoteForm defaultValues={data} onSubmit={(updatedNote) => update(Object.assign(data, updatedNote))} />
				<div>
					<DateTime value={data.updatedOn ?? data.createdOn} className="text-sm text-neutral-500" />
				</div>
			</div>
		</div>
	);
};
