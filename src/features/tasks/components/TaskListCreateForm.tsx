import { z } from 'zod';
import { t } from 'i18next';

// COMPONENTS
import { Button } from '@karendt/ui';
import { Form, Input, useForm } from '@karendt/forms';

const TaskSchema = z.object({
	title: z.string().min(2).max(50),
});

type TaskSchemaInterface = z.infer<typeof TaskSchema>;

export const TaskListCreateForm = ({
	onSubmit,
	isPending,
}: {
	onSubmit: (data: TaskSchemaInterface) => void;
	isPending?: boolean;
}) => {
	const form = useForm({
		schema: TaskSchema,
		defaultValues: { title: '' },
	});

	return (
		// @ts-ignore
		<Form form={form} onSubmit={onSubmit} className="flex flex-col gap-3 ">
			<Input control={form.control} name="title" type="text" label={t('general.title')} />
			<Button type="submit" intent="primary" className="ml-auto" loading={isPending}>
				{t('general.submit')}
			</Button>
		</Form>
	);
};
