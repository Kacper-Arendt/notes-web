import { LinkToast } from 'src/components/toasts/LinkToast';
import { toast } from 'react-toastify';
import { t } from 'i18next';

// HOOKS
import { useAddNote } from 'src/features/notes/api/createNote';

// COMPONENTS
import { NoteSaveForm } from 'src/features/notes/components/NoteSaveForm';
import { CreateNoteContainer } from 'src/features/notes/components/CreateNoteContainer';

// MODELS
import { CreateNoteResponseInterface } from 'src/features/notes/models';

export const CreateNote = () => {
	const { mutate: addNote } = useAddNote();

	const onSuccess = (res: CreateNoteResponseInterface) => {
		toast.success(<LinkToast linkText={t('general.click')} to={`/notes/${res.id}`} leftText={t('general.createdSuccessfully')} />);
	};

	return (
		<CreateNoteContainer>
			<NoteSaveForm defaultValues={{ name: '', content: '' }} onSubmit={(data) => addNote(data, { onSuccess })} />
		</CreateNoteContainer>
	);
};
