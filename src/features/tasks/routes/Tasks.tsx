// REDUX

// HOOKS
import { TaskContextProvider, useTaskContext } from 'src/features/tasks/context/taskContext';

// MODELS

// COMPONENTS
import { Layout } from 'src/components/layouts/mainLayout';
import { TaskListHeader } from 'src/features/tasks/components/TaskListHeader';
import { TaskList } from 'src/features/tasks/components/TaskList';
import { TaskListCreate } from 'src/features/tasks/components/TaskListCreate';
import { TaskItems } from 'src/features/tasks/components/TaskItems';

// STYLES

// UTILS

const TasksContainer = () => {
	const { activeTask } = useTaskContext();

	return (
		<>
			<Layout>
				<Layout.LeftSidebar>
					<TaskListHeader />
					<TaskList />
				</Layout.LeftSidebar>
				<Layout.Main>{activeTask ? <TaskItems /> : <TaskListCreate />}</Layout.Main>
			</Layout>
		</>
	);
};

export const Tasks = () => (
	<TaskContextProvider>
		<TasksContainer />
	</TaskContextProvider>
);
