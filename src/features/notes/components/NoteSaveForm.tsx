import { t } from 'i18next';
import { z } from 'zod';

// MODELS
import { NoteCreateRequestInterface } from 'src/features/notes/models';

// COMPONENTS
import { Form, Input, useForm } from '@karendt/forms';
import { Button } from '@karendt/ui';

// STYLES
import s from 'src/features/notes/components/styles.module.css';

const NoteSchema = z.object({
	name: z.string().min(2).max(50),
	content: z.string(),
});

type NoteSchemaInterface = z.infer<typeof NoteSchema>;

export const NoteSaveForm = ({
	onSubmit,
	defaultValues,
}: {
	defaultValues: NoteCreateRequestInterface;
	onSubmit: (data: NoteSchemaInterface) => void;
}) => {
	const form = useForm({
		schema: NoteSchema,
		defaultValues,
	});

	return (
		<Form form={form} onSubmit={onSubmit} className={s.noteSaveForm}>
			<Input control={form.control} name="name" type="text" />
			<Input control={form.control} name="content" type="text" />
			<Button type="submit" intent="primary" className="m-auto">
				{t('general.submit')}
			</Button>
		</Form>
	);
};
