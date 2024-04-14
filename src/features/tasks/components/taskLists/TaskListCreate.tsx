import { t } from 'i18next';

// HOOKS
import { useCreateTaskList } from 'src/features/tasks/api/TaskListCreate';
import { useTaskContext } from 'src/features/tasks/context/taskContext';

// COMPONENTS
import { TaskListCreateForm } from 'src/features/tasks/components/taskLists/TaskListCreateForm';

export const TaskListCreate = () => {
	const { setActiveTask } = useTaskContext();
	const { isPending, mutate } = useCreateTaskList();

	return (
		<div className="p-4">
			<div className="flex flex-col gap-3 rounded-md border border-zinc-700 shadow-2xl p-4">
				<p className="text-xl font-semibold text-primary">{t('general.addTaskList')}</p>
				<TaskListCreateForm
					onSubmit={(data) => mutate(data, { onSuccess: (resp) => setActiveTask(resp.listId) })}
					isPending={isPending}
				/>
			</div>
		</div>
	);
};
