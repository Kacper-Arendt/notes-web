// HOOKS
import { useTaskContext } from 'src/features/tasks/context/taskContext';

// COMPONENTS
import { ListHeader } from 'src/components/lists/ListHeader';

export const TaskListHeader = () => {
	const { sortBy, setSortBy, activeTask, setActiveTask } = useTaskContext();

	return <ListHeader sortBy={sortBy} setSortBy={setSortBy} onCreateNew={() => setActiveTask(null)} isCreateNewActive={!activeTask} />;
};
