// HOOKS
import { useTaskItemsQuery } from 'src/features/tasks/api/TaskListGet';
import { useDeleteTaskList } from 'src/features/tasks/api/TaskListDelete';
import { useSortByDates } from 'src/shared/hooks/useSortByDates';
import { useTaskContext } from 'src/features/tasks/context/taskContext';

// COMPONENTS
import { RemoveIconButton } from 'src/components/buttons/RemoveIconButton';
import { TaskItemCreate } from 'src/features/tasks/components/taskItems/TaskItemCreate';
import { Task } from 'src/features/tasks/components/taskItems/Task';

export const TaskItems = ({ id }: { id: string }) => {
	const { setActiveTask } = useTaskContext();
	const { data } = useTaskItemsQuery({ params: { id } });
	const useDelete = useDeleteTaskList();
	const sorted = useSortByDates(data?.tasksList ?? [], 'desc');

	if (!data) return null;

	return (
		<div className="max-w-screen-lg	p-4 flex flex-col gap-4 h-full">
			<div className="flex justify-between">
				<p className="text-lg font-medium">{data.title}</p>
				<RemoveIconButton
					onClick={() => useDelete.mutate(id, { onSuccess: () => setActiveTask(null) })}
					loading={useDelete.isPending}
				/>
			</div>
			<TaskItemCreate parentId={id} />
			<div className="overflow-auto">{sorted?.map((item) => <Task key={item.taskId} {...item} />)}</div>
		</div>
	);
};
