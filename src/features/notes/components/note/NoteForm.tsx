import { t } from 'i18next';
import { z } from 'zod';

// MODELS
import { NoteCreateRequestInterface } from 'src/features/notes/models';

// COMPONENTS
import { Form, Input, Textarea, useForm } from '@karendt/forms';
import { Button } from '@karendt/ui';

// STYLES
import s from './styles.module.css';

const NoteSchema = z.object({
	name: z.string().min(2).max(50),
	content: z.string(),
});

type NoteSchemaInterface = z.infer<typeof NoteSchema>;

export const NoteForm = ({
	onSubmit,
	defaultValues,
	isPending,
}: {
	defaultValues: NoteCreateRequestInterface;
	onSubmit: (data: NoteSchemaInterface) => void;
	isPending?: boolean;
}) => {
	const form = useForm({
		schema: NoteSchema,
		defaultValues,
	});

	return (
		// @ts-ignore
		<Form form={form} onSubmit={onSubmit} className="flex flex-col gap-3 ">
			<Input control={form.control} name="name" type="text" />
			<Textarea control={form.control} name="content" className={s.textArea} />
			<Button type="submit" intent="primary" className="ml-auto" loading={isPending}>
				{t('general.submit')}
			</Button>
		</Form>
	);
};
