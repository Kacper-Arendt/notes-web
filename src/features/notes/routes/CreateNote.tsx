import { LinkToast } from 'src/components/toasts/LinkToast';
import { toast } from 'react-toastify';
import { t } from 'i18next';

// HOOKS
import { useCreateNote } from 'src/features/notes/api/createNote';

// COMPONENTS
import { NoteSaveForm } from 'src/features/notes/components/NoteSaveForm';
import { CreateNoteContainer } from 'src/features/notes/components/CreateNoteContainer';
import { QueryBoundaries } from 'src/components/errors/QueryBoundary';

// MODELS
import { CreateNoteResponseInterface } from 'src/features/notes/models';

export const CreateNote = () => {
	const { mutate: addNote } = useCreateNote();

	const onSuccess = (res: CreateNoteResponseInterface) => {
		toast.success(<LinkToast linkText={t('general.click')} to={`/notes/${res.id}`} leftText={t('general.createdSuccessfully')} />);
	};

	return (
		<QueryBoundaries>
			<CreateNoteContainer>
				<NoteSaveForm defaultValues={{ name: '', content: '' }} onSubmit={(data) => addNote(data, { onSuccess })} />
			</CreateNoteContainer>
		</QueryBoundaries>
	);
};
