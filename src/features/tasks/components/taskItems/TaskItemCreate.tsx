import { Form, useForm } from '@karendt/forms';
import { z } from 'zod';
import { t } from 'i18next';
import { useCreateTask } from 'src/features/tasks/api/TaskCreate';

const schema = z.object({
	name: z.string().min(1).max(50),
});

export const TaskItemCreate = ({ parentId }: { parentId: string }) => {
	const form = useForm({ schema, defaultValues: {} });
	const { mutate, isPending } = useCreateTask();

	return (
		<Form
			form={form}
			onSubmit={(data) => {
				mutate({ ...data, taskListId: parentId }, { onSuccess: () => form.reset() });
			}}
			className="flex gap-4 w-full"
		>
			<input
				{...form.register('name')}
				name="name"
				type="text"
				placeholder="Type here"
				className="input input-ghost w-full max-w-xs input-bordered	"
			/>
			<button type="submit" className="btn btn-outline btn-primary" disabled={isPending}>
				{t('general.submit')}
			</button>
		</Form>
	);
};
