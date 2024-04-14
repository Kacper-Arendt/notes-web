// HOOKS
import { useTaskListQuery } from 'src/features/tasks/api/TaskListsGet';
import { useSortByDates } from 'src/shared/hooks/useSortByDates';
import { useTaskContext } from 'src/features/tasks/context/taskContext';
import { useAppStore } from 'src/store';

// COMPONENTS
import { TaskListItem } from 'src/features/tasks/components/taskLists/TaskListItem';

export const TaskList = () => {
	const controller = new AbortController();
	const { data } = useTaskListQuery({ params: { signal: controller.signal } });
	const { setActiveTask, activeTask, sortBy } = useTaskContext();
	const { toggleSidebarNavOpen } = useAppStore();
	const sortedByDate = useSortByDates(data ?? [], sortBy);

	const onNoteClick = (id: string) => {
		setActiveTask(id);
		toggleSidebarNavOpen(false);
	};

	if (!data) return null;

	return (
		<div>
			<div className="flex flex-col p-4 gap-2">
				{sortedByDate.map((item) => (
					<button key={item.listId} type="button" onClick={() => onNoteClick(item.listId)} className="grow">
						<TaskListItem {...item} active={item.listId === activeTask} />
					</button>
				))}
			</div>
		</div>
	);
};
