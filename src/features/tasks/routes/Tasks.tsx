// HOOKS
import { TaskContextProvider, useTaskContext } from 'src/features/tasks/context/taskContext';

// COMPONENTS
import { Layout } from 'src/components/layouts/mainLayout';
import { TaskListHeader, TaskList, TaskListCreate } from 'src/features/tasks/components/taskLists';
import { TaskItems } from 'src/features/tasks/components/taskItems';

const TasksContainer = () => {
	const { activeTask } = useTaskContext();

	return (
		<>
			<Layout>
				<Layout.LeftSidebar>
					<TaskListHeader />
					<TaskList />
				</Layout.LeftSidebar>
				<Layout.Main>{activeTask ? <TaskItems id={activeTask} /> : <TaskListCreate />}</Layout.Main>
			</Layout>
		</>
	);
};

export const Tasks = () => (
	<TaskContextProvider>
		<TasksContainer />
	</TaskContextProvider>
);
