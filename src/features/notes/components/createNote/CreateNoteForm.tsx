import { t } from 'i18next';
import { z } from 'zod';

// COMPONENTS
import { Form, Input, useForm } from '@karendt/forms';
import { Button } from '@karendt/ui';

const NoteSchema = z.object({
	name: z.string().min(2).max(50),
	content: z.string(),
});

type NoteSchemaInterface = z.infer<typeof NoteSchema>;

export const CreateNoteForm = ({ onSubmit, isPending }: { onSubmit: (data: NoteSchemaInterface) => void; isPending?: boolean }) => {
	const form = useForm({
		schema: NoteSchema,
		defaultValues: { name: '', content: '' },
	});

	return (
		// @ts-ignore
		<Form form={form} onSubmit={onSubmit} className="flex flex-col gap-3 ">
			<Input control={form.control} name="name" type="text" label={t('general.name')} />
			<Input control={form.control} name="content" type="text" label={t('general.content')} />
			<Button type="submit" intent="primary" className="ml-auto" loading={isPending}>
				{t('general.submit')}
			</Button>
		</Form>
	);
};
